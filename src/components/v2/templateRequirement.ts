import { GameInfoViewModel } from "@/types/v2/model";

export type Requirements =
  | "Over1Items"
  | "Over2Items"
  | "Over3Items"
  | "Over4Items"
  | "Over5Items"
  | "Over6Items"
  | "playerName"
  | "KDA"
  | "PlayerNameIsLessThan7"
  | "PlayerNameIsOverThan7"
  | "ChampionNameIsLessThan10"
  | "ChampionNameIsOverThan10";

type TemplateRequirement = {
  name: Requirements;
  // eslint-disable-next-line no-unused-vars
  check: (gameInfo: GameInfoViewModel) => boolean;
};

export const templateRequirements: TemplateRequirement[] = [
  {
    name: "Over1Items",
    check: (gameInfo) =>
      gameInfo.items?.length ? gameInfo.items.length >= 1 : false,
  },
  {
    name: "Over2Items",
    check: (gameInfo) =>
      gameInfo.items?.length ? gameInfo.items.length >= 2 : false,
  },
  {
    name: "Over3Items",
    check: (gameInfo) =>
      gameInfo.items?.length ? gameInfo.items.length >= 3 : false,
  },
  {
    name: "Over4Items",
    check: (gameInfo) =>
      gameInfo.items?.length ? gameInfo.items.length >= 4 : false,
  },
  {
    name: "Over5Items",
    check: (gameInfo) =>
      gameInfo.items?.length ? gameInfo.items.length >= 5 : false,
  },
  {
    name: "Over6Items",
    check: (gameInfo) =>
      gameInfo.items?.length ? gameInfo.items.length >= 6 : false,
  },
  {
    name: "playerName",
    check: (gameInfo) => gameInfo.playerName !== undefined,
  },
  {
    name: "KDA",
    check: (gameInfo) => {
      return (
        gameInfo.kills !== undefined &&
        gameInfo.deaths !== undefined &&
        gameInfo.assists !== undefined
      );
    },
  },
  {
    name: "PlayerNameIsLessThan7",
    check: (gameInfo) =>
      gameInfo.playerName !== undefined
        ? gameInfo.playerName.length <= 7
        : false,
  },
  {
    name: "PlayerNameIsOverThan7",
    check: (gameInfo) =>
      gameInfo.playerName !== undefined
        ? gameInfo.playerName.length > 7
        : false,
  },
  {
    name: "ChampionNameIsLessThan10",
    check: (gameInfo) =>
      gameInfo.championName !== undefined
        ? gameInfo.championName.length <= 10
        : false,
  },
  {
    name: "ChampionNameIsOverThan10",
    check: (gameInfo) =>
      gameInfo.championName !== undefined
        ? gameInfo.championName.length > 10
        : false,
  },
  // 기타 조건 추가...
];
