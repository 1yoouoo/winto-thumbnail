import { selectTemplate } from "@/components/availableTemplates";
import { Ddragon } from "@/constant/constant";
import axios from "axios";
import { useEffect, useState } from "react";
import { GameInfoModel, Item } from "@/types/model";

const TemplateDataProcessor: React.FC<{
  parsedQueryString: any; //? any 대신 GameInfoDto로 타입 정의
}> = ({ parsedQueryString }) => {
  console.log("parsedQueryString", parsedQueryString);
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

  console.log("gameInfo", gameInfo);

  useEffect(() => {
    async function fetchItemInfo() {
      const allItemInfoUrl = `${Ddragon}/${parsedQueryString.gameVersion}/data/ko_KR/item.json`;
      const response = await axios.get(allItemInfoUrl);
      return response.data;
    }

    async function createItemsArray(itemInfo: { data: { [x: string]: any } }) {
      const items = [
        parsedQueryString.item0Id,
        parsedQueryString.item1Id,
        parsedQueryString.item2Id,
        parsedQueryString.item3Id,
        parsedQueryString.item4Id,
        parsedQueryString.item5Id,
        parsedQueryString.item6Id,
      ].reduce<Item[]>((acc, itemId) => {
        const item = itemInfo.data[String(itemId)];
        const totalGold = item?.gold?.total || 0;
        if (totalGold >= 2400) {
          acc.push({
            id: itemId,
            totalGold,
          });
        }
        return acc;
      }, []);

      setGameInfo({
        ...parsedQueryString,
        items,
        skinId: 0, //? 나중에 skinId 추가
      });
    }

    fetchItemInfo()
      .then(createItemsArray)
      .catch((error) => {
        console.error("Item 정보를 가져오는 데 실패했습니다:", error);
      });
  }, [parsedQueryString]);

  const SelectedTemplate = selectTemplate(gameInfo);

  const SelectedTemplateComponent = SelectedTemplate;

  return <SelectedTemplateComponent gameInfo={gameInfo} />;
};

export default TemplateDataProcessor;
