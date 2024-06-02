import axios from "axios";
import { Ddragon, app_url } from "@/constant/constant";
import { normalizeItemIds } from "../../../utils/v2/normalizeItemIds";
import {
  GameVersion,
  Item,
  Locale,
  SkinInfo,
  SkinKey,
  Spell,
} from "@/types/v2/model";
import { sendSlackNotification } from "../../../utils/v2/sendSlackNotification";
import { championDto } from "@/types/v2/championDto";

const fetchWithFallback = async (primaryUrl: string, fallbackUrl: string) => {
  try {
    const response = await axios.get(primaryUrl);
    return response;
  } catch (primaryError: any) {
    console.log(`Primary URL failed: ${primaryUrl}, Error: ${primaryError}`);
    try {
      const fallbackResponse = await axios.get(fallbackUrl);
      return fallbackResponse;
    } catch (fallbackError: any) {
      console.log(
        `Fallback URL failed: ${fallbackUrl}, Error: ${fallbackError}`
      );
      sendSlackNotification({
        title: "API 요청 중 에러 발생",
        details: `Primary Error: ${primaryError.toString()}, Fallback Error: ${fallbackError.toString()}`,
      });
      throw fallbackError;
    }
  }
};

const createUrls = (
  gameVersion: GameVersion,
  endpointTemplate: string,
  params: Record<string, string> = {}
): { primaryUrl: string; fallbackUrl: string } => {
  const endpoint = endpointTemplate.replace(
    /\{(\w+)\}/g,
    (_, key) => params[key]
  );
  return {
    primaryUrl: `${Ddragon}/cdn/${gameVersion.latestVersion}/${endpoint}`,
    fallbackUrl: `${Ddragon}/cdn/${gameVersion.prevVersion}/${endpoint}`,
  };
};

export const fetchLatestGameVersion = async (): Promise<GameVersion> => {
  try {
    const url = `${Ddragon}/api/versions.json`;
    const response = await axios.get(url);
    return {
      latestVersion: response.data[0],
      prevVersion: response.data[1],
    };
  } catch (error: any) {
    sendSlackNotification({
      title: "게임 버전 가져오기 중 에러 발생",
      details: error.toString(),
    });
    console.log("error from gameInfo: ", error);
    return {
      latestVersion: "14.9.1",
      prevVersion: "14.9.1",
    }; //! default version
  }
};

export const fetchItemInfo = async ({
  gameVersion,
  itemIds,
}: {
  gameVersion: GameVersion;
  itemIds: string[];
}): Promise<Item[]> => {
  const { primaryUrl, fallbackUrl } = createUrls(
    gameVersion,
    "data/en_US/item.json"
  );

  try {
    const itemData = await fetchWithFallback(primaryUrl, fallbackUrl);
    const normalizedItemIds = normalizeItemIds(itemIds);

    const Items: Item[] =
      normalizedItemIds.map((id) => ({
        id: parseInt(id, 10),
        totalGold: itemData.data.data[id]?.gold?.total ?? 0,
        name: itemData.data.data[id]?.name ?? "Unknown",
      })) || [];

    return Items;
  } catch (error: any) {
    sendSlackNotification({
      title: "아이템 정보 가져오기 중 에러 발생",
      details: error.toString(),
    });
    console.log(`${itemIds} 이 없습니다. 추가해주세요.`);
    return [];
  }
};

export const fetchSummonerSpellInfo = async ({
  gameVersion,
  spellIds,
}: {
  gameVersion: GameVersion;
  spellIds: number[];
}): Promise<Spell[]> => {
  try {
    const { primaryUrl, fallbackUrl } = createUrls(
      gameVersion,
      "data/en_US/summoner.json"
    );
    const spellsData = await fetchWithFallback(primaryUrl, fallbackUrl);

    const spells: Spell[] =
      spellIds?.map((id) => {
        const spellKey = Object.keys(spellsData.data.data).find(
          (key) => spellsData.data.data[key].key == String(id)
        );
        const spell = spellsData.data.data[spellKey!];
        return {
          id: parseInt(spell.key),
          name: spell.id,
        };
      }) || [];

    return spells;
  } catch (error: any) {
    sendSlackNotification({
      title: "스펠 정보 가져오기 중 에러 발생",
      details: error.toString(),
    });
    console.log(`${spellIds} 스펠 정보가 없습니다. 추가해주세요.`);
    return [];
  }
};

//TODO 챔피언 정보 가져오는 함수인데 번역된 챔피언 이름도 가져올 수 있어서 통합해야함
export const fetchSkinInfo = async ({
  gameVersion,
  championName,
}: {
  gameVersion: GameVersion;
  championName: string;
}): Promise<SkinInfo[]> => {
  const ChampionNameApiKey = championDto[championName].apiKey;
  const { primaryUrl, fallbackUrl } = createUrls(
    gameVersion,
    `data/en_US/champion/${ChampionNameApiKey}.json`
  );

  try {
    const response = await fetchWithFallback(primaryUrl, fallbackUrl);

    const skinData = response.data.data[`${ChampionNameApiKey}`]
      .skins as SkinInfo[];

    return skinData;
  } catch (error: any) {
    sendSlackNotification({
      title: "스킨 정보 가져오기 중 에러 발생",
      details: error.toString(),
    });
    console.log(`${ChampionNameApiKey} 스킨 정보가 없습니다. 추가해주세요.`);
    return [];
  }
};

export const fetchProPlayerList = async ({
  playerName,
}: {
  playerName: string;
}): Promise<string[]> => {
  const playerNameLower = playerName.toLowerCase().replace(/\s+/g, "%20");
  const prefix = `pro-player/${playerNameLower}`;

  console.log(prefix);

  try {
    const response = await fetch(
      `${app_url}/api/v2/get-file-list?prefix=${prefix}/`
    );
    const data = await response.json();
    const filteredData = data.filter(
      (path: string) => !path.endsWith("/") && !path.endsWith(".DS_Store")
    ) as string[];

    return filteredData;
  } catch (error) {
    sendSlackNotification({
      title: `${playerNameLower} 선수의 이미지가 없습니다. 추가해주세요.`,
      details: `${prefix} 경로에 이미지가 없습니다.`,
    });
    console.log(`${playerNameLower} 선수의 이미지가 없습니다. 추가해주세요.`);
    return [];
  }
};

export const fetchSkinListFromBucket = async ({
  championName,
}: {
  championName: string;
}): Promise<SkinKey[]> => {
  const championNameLower = championName.toLowerCase();
  try {
    const prefix = `champion/right/${championNameLower}`;
    const response = await fetch(
      `${app_url}/api/v2/get-file-list?prefix=${prefix}/`
    );
    const data = await response.json();
    const exactMatchRegex = new RegExp(`^${prefix}/[^/]+$`);
    const filteredData = data.filter(
      (path: string) =>
        !path.endsWith("/") &&
        !path.endsWith(".DS_Store") &&
        exactMatchRegex.test(path)
    ) as SkinKey[];

    return filteredData;
  } catch (error: any) {
    sendSlackNotification({
      title: "스킨 이미지 가져오기 중 에러 발생",
      details: error.toString(),
    });
    console.log(`${championNameLower} 스킨 이미지가 없습니다. 추가해주세요.`);
    return [];
  }
};

export const fetchChampionPortraitListFromBucket = async ({
  championName,
}: {
  championName: string;
}): Promise<string[]> => {
  const championNameLower = championName.toLowerCase();
  try {
    const prefix = `champion/portrait/${championNameLower}`;
    const response = await fetch(
      `${app_url}/api/v2/get-file-list?prefix=${prefix}/`
    );
    const data = await response.json();
    const filteredData = data.filter(
      (path: string) => !path.endsWith("/") && !path.endsWith(".DS_Store")
    ) as string[];
    return filteredData;
  } catch (error) {
    sendSlackNotification({
      title: "챔피언 포트레이트 이미지 가져오기 중 에러 발생",
      details: `${championNameLower} 포트레이트 이미지가 없습니다. 추가해주세요.`,
    });
    console.log(
      `${championNameLower} 포트레이트 이미지가 없습니다. 추가해주세요.`
    );
    return [];
  }
};

export const fetchProTeamLogo = async ({
  teamName: teamName,
}: {
  teamName: string;
}): Promise<string> => {
  const teamNameUpper = teamName.toUpperCase();
  const prefix = `pro-team/${teamNameUpper}`;

  try {
    const response = await fetch(
      `${app_url}/api/v2/get-file-list?prefix=${prefix}/`
    );
    const data = await response.json();
    const filteredData = data.filter(
      (path: string) => !path.endsWith("/") && !path.endsWith(".DS_Store")
    ) as string[];

    return encodeURIComponent(filteredData[0]);
  } catch (error) {
    sendSlackNotification({
      title: `${teamNameUpper} 팀의 이미지가 없습니다. 추가해주세요.`,
      details: `${prefix} 경로에 이미지가 없습니다.`,
    });
    console.log(`${teamNameUpper} 팀의 이미지가 없습니다. 추가해주세요.`);
    return "";
  }
};

export const fetchTranslateChampionName = async ({
  gameVersion,
  championName,
  locale,
}: {
  gameVersion: GameVersion;
  championName: string;
  locale: Locale;
}) => {
  const ChampionNameApiKey = championDto[championName].apiKey;
  const { primaryUrl, fallbackUrl } = createUrls(
    gameVersion,
    `data/${locale}/champion/${ChampionNameApiKey}.json`
  );
  try {
    const response = await fetchWithFallback(primaryUrl, fallbackUrl);

    return response.data.data[ChampionNameApiKey].name;
  } catch (error: any) {
    console.log(
      `${ChampionNameApiKey} 챔피언 이름 정보가 없습니다. 추가해주세요.`
    );
  }
};
