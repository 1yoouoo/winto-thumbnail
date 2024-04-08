import axios from "axios";
import { Ddragon, app_url } from "@/constant/constant";
import { normalizeItemIds } from "../../../utils/v2/normalizeItemIds";
import { Item, SkinInfo, SkinKey, Spell } from "@/types/v2/model";

export const fetchLatestGameVersion = async (): Promise<string> => {
  const url = `${Ddragon}/api/versions.json`;
  const response = await axios.get(url);

  return response.data[0];
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
  } catch {
    console.error("아이템 정보 가져오기 중 에러 발생");
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
  } catch {
    console.error("스펠 정보 가져오기 중 에러 발생");
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
  } catch {
    console.error("스킨 정보 가져오기 중 에러 발생");
    return [];
  }
};

export const fetchProPlayerList = async ({
  playerName,
  teamName,
}: {
  playerName: string;
  teamName: string;
}): Promise<string[]> => {
  try {
    const playerNameLower = playerName.toLowerCase();
    const prefix = `pro-player/${teamName}/${playerNameLower}`;
    const response = await fetch(
      `${app_url}/api/v2/get-file-list?prefix=${prefix}`
    );
    const data = await response.json();
    const filteredData = data.filter(
      (path: string) => !path.endsWith("/")
    ) as string[];

    return filteredData;
  } catch (error) {
    console.error("파일 목록 가져오기 중 에러 발생:", error);
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
      (path: string) => !path.endsWith("/")
    ) as SkinKey[];

    return filteredData;
  } catch (error) {
    console.error("파일 목록 가져오기 중 에러 발생:", error);
    return [];
  }
};
