import axios from "axios";
import { Ddragon } from "@/constant/constant";
import { normalizeItemIds } from "../../../utils/v2/normalizeItemIds";
import { Spell } from "@/types/v2/model";

export const fetchLatestGameVersion = async () => {
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
}) => {
  const url = `${Ddragon}/cdn/${gameVersion}/data/en_US/item.json`;
  const response = await axios.get(url);
  const itemData = response.data.data;
  const normalizedItemIds = normalizeItemIds(itemIds || []);

  return normalizedItemIds.map((id) => ({
    id: parseInt(id, 10),
    totalGold: itemData[id]?.gold?.total ?? 0,
    name: itemData[id]?.name ?? "Unknown",
  }));
};

export const fetchSummonerSpellInfo = async ({
  gameVersion,
  spellIds,
}: {
  gameVersion: string;
  spellIds: number[];
}) => {
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
};

export const fetchSkinInfo = async ({
  gameVersion,
  championName,
}: {
  gameVersion: string;
  championName: string;
}) => {
  const url = `${Ddragon}/cdn/${gameVersion}/data/en_US/champion/${championName}.json`;
  const response = await axios.get(url);
  const skinData = response.data.data[`${championName}`].skins;

  return skinData;
};
