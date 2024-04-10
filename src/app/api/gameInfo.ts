import axios from "axios";
import { Ddragon, app_url } from "@/constant/constant";
import { normalizeItemIds } from "../../../utils/v2/normalizeItemIds";
import { Item, SkinInfo, SkinKey, Spell } from "@/types/v2/model";
import { sendSlackNotification } from "../../../utils/v2/sendSlackNotification";

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
    return "14.6.1"; //! default version
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
    console.log("error from gameInfo: ", error);
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
    console.log("error from gameInfo: ", error);
    return [];
  }
};

export const fetchSkinInfo = async ({
  gameVersion,
  championName,
}: {
  gameVersion: string;
  championName: string;
}): Promise<SkinInfo[]> => {
  try {
    const url = `${Ddragon}/cdn/${gameVersion}/data/en_US/champion/${championName}.json`;
    const response = await axios.get(url);
    const skinData = response.data.data[`${championName}`].skins as SkinInfo[];

    return skinData;
  } catch (error: any) {
    sendSlackNotification({
      title: "스킨 정보 가져오기 중 에러 발생",
      details: error.toString(),
    });
    console.log("error from gameInfo: ", error);
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
  try {
    const prefix = `champion/2024-04/right/${championName}`;
    const response = await fetch(
      `${app_url}/api/v2/get-file-list?prefix=${prefix}`
    );
    const data = await response.json();
    const filteredData = data.filter(
      (path: string) => !path.endsWith("/") && !path.endsWith(".DS_Store")
    ) as SkinKey[];

    return filteredData;
  } catch (error: any) {
    sendSlackNotification({
      title: "스킨 이미지 가져오기 중 에러 발생",
      details: error.toString(),
    });
    console.log("error from gameInfo: ", error);
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
    return "";
  }
};
