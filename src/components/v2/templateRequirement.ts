import { GameInfoViewModel } from "@/types/v2/model";

export type Requirements =
  | "Over1Items"
  | "Over2Items"
  | "Over3Items"
  | "Over4Items"
  | "Over5Items"
  | "Over6Items"
  | "playerName"
  | "KDA";

type TemplateRequirement = {
  name: Requirements;
  // eslint-disable-next-line no-unused-vars
  check: (gameInfo: GameInfoViewModel) => boolean;
};

export const templateRequirements: TemplateRequirement[] = [
  {
    name: "Over1Items",
    check: (gameInfo) => gameInfo.items.length >= 1,
  },
  {
    name: "Over2Items",
    check: (gameInfo) => gameInfo.items.length >= 2,
  },
  {
    name: "Over3Items",
    check: (gameInfo) => gameInfo.items.length >= 3,
  },
  {
    name: "Over4Items",
    check: (gameInfo) => gameInfo.items.length >= 4,
  },
  {
    name: "Over5Items",
    check: (gameInfo) => gameInfo.items.length >= 5,
  },
  {
    name: "Over6Items",
    check: (gameInfo) => gameInfo.items.length >= 6,
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
  // 기타 조건 추가...
];
