import { GameInfoViewModel } from "@/types/v2/model";

export type PreferredConditions = "NoDeath" | "HighKDA" | "playerName";

type TemplatePreferredCondition = {
  name: PreferredConditions;
  weight: number;
  // eslint-disable-next-line no-unused-vars
  check: (gameInfo: GameInfoViewModel) => boolean;
};

export const templatePreferredConditions: TemplatePreferredCondition[] = [
  {
    name: "NoDeath",
    weight: 20,
    check: (gameInfo) => Number(gameInfo.deaths) === 0,
  },
  {
    name: "HighKDA",
    weight: 15,
    check: (gameInfo) => {
      const kda =
        (Number(gameInfo.kills) + Number(gameInfo.assists)) /
        Math.max(1, Number(gameInfo.deaths));
      return kda > 5;
    },
  },
  {
    name: "playerName",
    weight: 10,
    check: (gameInfo) => gameInfo.playerName !== undefined,
  },

  // 기타 조건 추가...
];
