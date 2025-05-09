import { GameInfoViewModel, Item } from "@/types/v2/model";

export type Requirements =
  | "Over0ItemsWithGoldOver2000"
  | "Over1ItemsWithGoldOver2000"
  | "Over2ItemsWithGoldOver2000"
  | "Over3ItemsWithGoldOver2000"
  | "Over4ItemsWithGoldOver2000"
  | "Over5ItemsWithGoldOver2000"
  | "Over6ItemsWithGoldOver2000"
  | "PlayerNameIsLessThan7"
  | "PlayerNameIsOverThan7"
  | "ChampionNameIsLessThan10"
  | "ChampionNameIsOverThan10"
  | "HasProPlayerImage"
  | "MultiKills";

type TemplateRequirement = {
  name: Requirements;
  // eslint-disable-next-line no-unused-vars
  check: (gameInfo: GameInfoViewModel) => boolean;
};

export const templateRequirements: TemplateRequirement[] = [
  {
    name: "Over0ItemsWithGoldOver2000",
    check: (gameInfo) => countItemsWithGoldOver2000(gameInfo.items) >= 0,
  },
  {
    name: "Over1ItemsWithGoldOver2000",
    check: (gameInfo) => countItemsWithGoldOver2000(gameInfo.items) >= 1,
  },
  {
    name: "Over2ItemsWithGoldOver2000",
    check: (gameInfo) => countItemsWithGoldOver2000(gameInfo.items) >= 2,
  },
  {
    name: "Over3ItemsWithGoldOver2000",
    check: (gameInfo) => countItemsWithGoldOver2000(gameInfo.items) >= 3,
  },
  {
    name: "Over4ItemsWithGoldOver2000",
    check: (gameInfo) => countItemsWithGoldOver2000(gameInfo.items) >= 4,
  },
  {
    name: "Over5ItemsWithGoldOver2000",
    check: (gameInfo) => countItemsWithGoldOver2000(gameInfo.items) >= 5,
  },
  {
    name: "Over6ItemsWithGoldOver2000",
    check: (gameInfo) => countItemsWithGoldOver2000(gameInfo.items) >= 6,
  },

  {
    name: "PlayerNameIsLessThan7",
    check: (gameInfo) => gameInfo.playerName.length <= 7,
  },
  {
    name: "PlayerNameIsOverThan7",
    check: (gameInfo) => gameInfo.playerName.length > 7,
  },
  {
    name: "ChampionNameIsLessThan10",
    check: (gameInfo) => gameInfo.championName.length <= 10,
  },
  {
    name: "ChampionNameIsOverThan10",
    check: (gameInfo) => gameInfo.championName.length > 10,
  },
  {
    name: "HasProPlayerImage",
    check: (gameInfo: GameInfoViewModel) => {
      return (gameInfo.proPlayerImageKeyList ?? []).length > 0;
    },
  },
  {
    name: "MultiKills",
    check: (gameInfo) => {
      return (
        Number(gameInfo.tripleKills) > 0 ||
        Number(gameInfo.quadraKills) > 0 ||
        Number(gameInfo.pentaKills) > 0
      );
    },
  },
  // 기타 조건 추가...
];

const countItemsWithGoldOver2000 = (items: Item[] | undefined): number => {
  if (!items) return 0;
  return items.filter((item) => item.totalGold >= 2000).length;
};
