import axios from "axios";
import { Ddragon, app_url } from "@/constant/constant";
import { normalizeItemIds } from "../../../utils/v2/normalizeItemIds";
import { Item, Locale, SkinInfo, SkinKey, Spell } from "@/types/v2/model";
import { sendSlackNotification } from "../../../utils/v2/sendSlackNotification";
import { championDto } from "@/types/v2/championDto";

export const fetchLatestGameVersion = async (): Promise<string> => {
  try {
    const url = `${Ddragon}/api/versions.json`;
    const response = await axios.get(url);
    return response.data[0];
  } catch (error: any) {
    sendSlackNotification({
      title: "게임 버전 가져오기 중 에러 발생",
      details: error.toString(),
    });
    console.log("error from gameInfo: ", error);
    //TODO 두 번째 버전을 따로 파일에 저장해서 에러시 두 번째 버전을 리턴하도록 수정
    //TODO 버전 체크할 떄 두 번째 버전이 달라지면 수정하는 코드 추가
    return "14.9.1"; //! default version
  }
};

export const fetchItemInfo = async ({
  gameVersion,
  itemIds,
}: {
  gameVersion: string;
  itemIds: string[];
}): Promise<Item[]> => {
  try {
    const url = `${Ddragon}/cdn/${gameVersion}/data/en_US/item.json`;
    const response = await axios.get(url);
    const itemData = response.data.data;
    const normalizedItemIds = normalizeItemIds(itemIds);

    const Items: Item[] =
      normalizedItemIds.map((id) => ({
        id: parseInt(id, 10),
        totalGold: itemData[id]?.gold?.total ?? 0,
        name: itemData[id]?.name ?? "Unknown",
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
  gameVersion: string;
  spellIds: number[];
}): Promise<Spell[]> => {
  try {
    const url = `${Ddragon}/cdn/${gameVersion}/data/en_US/summoner.json`;
    const response = await axios.get(url);
    const spellsData = response.data.data;

    const spells: Spell[] =
      spellIds?.map((id) => {
        const spellKey = Object.keys(spellsData).find(
          (key) => spellsData[key].key == String(id)
        );
        const spell = spellsData[spellKey!];
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
  gameVersion: string;
  championName: string;
}): Promise<SkinInfo[]> => {
  const ChampionNameApiKey = championDto[championName].apiKey;
  try {
    const url = `${Ddragon}/cdn/${gameVersion}/data/en_US/champion/${ChampionNameApiKey}.json`;
    const response = await axios.get(url);
    const skinData = response.data.data[`${championName}`].skins as SkinInfo[];

    return skinData;
  } catch (error: any) {
    sendSlackNotification({
      title: "스킨 정보 가져오기 중 에러 발생",
      details: error.toString(),
    });
    console.log(`${championName} 스킨 정보가 없습니다. 추가해주세요.`);
    return [];
  }
};

export const fetchProPlayerList = async ({
  playerName,
}: {
  playerName: string;
}): Promise<string[]> => {
  const playerNameLower = playerName.toLowerCase();
  const prefix = `pro-player/${playerNameLower}`;

  try {
    const response = await fetch(
      `${app_url}/api/v2/get-file-list?prefix=${prefix}`
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
      `${app_url}/api/v2/get-file-list?prefix=${prefix}`
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
      `${app_url}/api/v2/get-file-list?prefix=${prefix}`
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
      `${app_url}/api/v2/get-file-list?prefix=${prefix}`
    );
    const data = await response.json();
    const filteredData = data.filter(
      (path: string) => !path.endsWith("/") && !path.endsWith(".DS_Store")
    ) as string[];

    return filteredData[0];
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
  gameVersion: string;
  championName: string;
  locale: Locale;
}) => {
  const ChampionNameApiKey = championDto[championName].apiKey;
  try {
    const url = `${Ddragon}/cdn/${gameVersion}/data/${locale}/champion/${ChampionNameApiKey}.json`;
    const response = await axios.get(url);

    return response.data.data[championName].name;
  } catch (error: any) {
    console.log(`${championName} 챔피언 이름 정보가 없습니다. 추가해주세요.`);
  }
};
