import { selectTemplate } from "@/templates/availableTemplates";
import { Ddragon } from "@/constant/constant";
import axios from "axios";
import { useEffect, useState } from "react";
import { GameInfoDto, GameInfoModel, Item } from "@/types/model";
import Template0 from "@/templates/template0/Template0";
const TemplateDataProcessor: React.FC<{ searchParams: GameInfoDto }> = ({
  searchParams,
}) => {
  const [gameInfo, setGameInfo] = useState<GameInfoModel>({
    championName: "",
    teamName: "",
    playerName: "",
    kills: 0,
    deaths: 0,
    assists: 0,
    items: [
      {
        id: 0,
        totalGold: 0,
      },
    ],
    skinId: 0,
    teamPosition: "TOP",
    gameVersion: "",
    primaryStyle: 0,
    subStyle: 0,
    spells: [],
    firstBloodKill: false,
    doubleKills: 0,
    tripleKills: 0,
    quadraKills: 0,
    pentaKills: 0,
  });

  useEffect(() => {
    async function fetchItemInfo() {
      const allItemInfoUrl = `${Ddragon}/${searchParams.gameVersion}/data/ko_KR/item.json`;
      const response = await axios.get(allItemInfoUrl);
      return response.data;
    }

    async function createItemsArray(itemInfo: { data: { [x: string]: any } }) {
      const items = [
        searchParams.item0Id,
        searchParams.item1Id,
        searchParams.item2Id,
        searchParams.item3Id,
        searchParams.item4Id,
        searchParams.item5Id,
        searchParams.item6Id,
      ].map((itemId) => {
        const item = itemInfo.data[String(itemId)];
        return {
          id: itemId,
          totalGold: item?.gold?.total || 0,
        };
      });

      // searchParams의 다른 정보를 포함하여 gameInfo 상태 업데이트
      setGameInfo({
        ...searchParams,
        items,
        skinId: 1, // Add the missing skinId property
      });
    }

    fetchItemInfo().then(createItemsArray);
  }, [searchParams]);

  const SelectedTemplate = selectTemplate(gameInfo);

  const SelectedTemplateComponent = SelectedTemplate.component;
  //   const SelectedTemplateComponent = Template0;

  return <SelectedTemplateComponent gameInfo={gameInfo} />;
};

export default TemplateDataProcessor;
