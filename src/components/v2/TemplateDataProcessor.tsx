import { useEffect, useState } from "react";
import axios from "axios";
import { Ddragon } from "@/constant/constant";
import { normalizeItemIds } from "../../../utils/normalizeItemIds";
import {
  GameInfoModel,
  Item,
  ParsedQueryString,
  Skin,
  Spell,
} from "@/types/v2/model";
import { selectTemplate } from "./selectTemplate";
import { WaterMark } from "@/style/common";

const isDevelopment = process.env.NODE_ENV === "development";

const TemplateDataProcessor: React.FC<{
  parsedQueryString: ParsedQueryString;
}> = ({ parsedQueryString }) => {
  const [gameInfo, setGameInfo] = useState<GameInfoModel | null>(null);

  async function fetchItemInfo(
    gameVersion: string,
    itemIds?: string | string[]
  ): Promise<Item[]> {
    const url = `${Ddragon}/${gameVersion}/data/en_US/item.json`;
    try {
      const response = await axios.get(url);
      const itemData = response.data.data;
      const normalizedItemIds = normalizeItemIds(itemIds || []);

      return normalizedItemIds.map((id) => ({
        id: parseInt(id, 10),
        totalGold: itemData[id]?.gold?.total ?? 0,
        name: itemData[id]?.name ?? "Unknown",
      }));
    } catch (error) {
      console.error("아이템 정보를 가져오는 데 실패했습니다:", error);
      return [];
    }
  }

  async function fetchSummonerSpellInfo(
    gameVersion: string,
    spellIds?: number[]
  ): Promise<Spell[]> {
    const url = `${Ddragon}/${gameVersion}/data/en_US/summoner.json`;
    try {
      const response = await axios.get(url);
      const spellsData = response.data.data;

      const spells: Spell[] =
        spellIds?.map((id) => {
          const spellKey = Object.keys(spellsData).find(
            (key) => spellsData[key].key == String(id)
          );
          const spell = spellsData[spellKey!];
          return {
            id: id,
            name: spell.id,
          };
        }) || [];

      return spells;
    } catch (error) {
      console.error("스펠 정보를 가져오는 데 실패했습니다:", error);
      return [];
    }
  }

  async function fetchSkinInfo(
    gameVersion: string,
    championName: string
  ): Promise<Skin[]> {
    const url = `${Ddragon}/${gameVersion}/data/en_US/champion/${championName}.json`;
    try {
      const response = await axios.get(url);
      const skinData = response.data.data[`${championName}`].skins;
      return skinData;
    } catch (error) {
      console.error("스킨 정보를 가져오는 데 실패했습니다:", error);
      return [];
    }
  }

  function optionalFields(query: ParsedQueryString): Partial<GameInfoModel> {
    const fields: Partial<GameInfoModel> = {};
    if (query.teamName) fields.teamName = query.teamName;
    if (query.playerName) fields.playerName = query.playerName;
    if (query.kills) fields.kills = parseInt(query.kills, 10);
    if (query.deaths) fields.deaths = parseInt(query.deaths, 10);
    if (query.assists) fields.assists = parseInt(query.assists, 10);
    if (query.teamPosition) fields.teamPosition = query.teamPosition;
    if (query.primaryPerk) fields.primaryPerk = parseInt(query.primaryPerk, 10);
    if (query.subPerk) fields.subPerk = parseInt(query.subPerk, 10);
    if (query.firstBloodKill)
      fields.firstBloodKill = query.firstBloodKill === "true";
    if (query.doubleKills) fields.doubleKills = parseInt(query.doubleKills, 10);
    if (query.tripleKills) fields.tripleKills = parseInt(query.tripleKills, 10);
    if (query.quadraKills) fields.quadraKills = parseInt(query.quadraKills, 10);
    if (query.pentaKills) fields.pentaKills = parseInt(query.pentaKills, 10);

    return fields;
  }

  useEffect(() => {
    async function fetchAndSetGameInfo() {
      try {
        const items = await fetchItemInfo(
          parsedQueryString.gameVersion,
          parsedQueryString.itemIds
        );

        const spells = await fetchSummonerSpellInfo(
          parsedQueryString.gameVersion,
          parsedQueryString.spells?.map((spell) => parseInt(spell, 10))
        );

        const skins = await fetchSkinInfo(
          parsedQueryString.gameVersion,
          parsedQueryString.championName
        );

        const updatedGameInfo = buildGameInfo(
          parsedQueryString,
          items,
          spells,
          skins
        );
        setGameInfo(updatedGameInfo);
      } catch (error) {
        console.error("아이템 정보를 가져오는 중 오류가 발생했습니다:", error);
      }
    }

    function buildGameInfo(
      query: ParsedQueryString,
      items: Item[],
      spells: Spell[],
      skins: Skin[]
    ): GameInfoModel {
      return {
        championName: query.championName,
        gameVersion: query.gameVersion,
        items,
        spells,
        skins,
        ...optionalFields(query),
      };
    }

    fetchAndSetGameInfo();
  }, [parsedQueryString]);

  if (!gameInfo) return null;

  const SelectedTemplateComponent = selectTemplate(gameInfo);
  return (
    <>
      <SelectedTemplateComponent gameInfo={gameInfo} />
      {isDevelopment && (
        <WaterMark>{`${SelectedTemplateComponent.name}`}</WaterMark>
      )}
    </>
  );
};

export default TemplateDataProcessor;
