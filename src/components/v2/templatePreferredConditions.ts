import { GameInfoModel } from "@/types/v2/model";

export type PreferredConditions = "NoDeath" | "HighKDA" | "SpecialSkin";

type TemplatePreferredCondition = {
  name: PreferredConditions;
  weight: number;
  // eslint-disable-next-line no-unused-vars
  check: (gameInfo: GameInfoModel) => boolean;
};

export const templatePreferredConditions: TemplatePreferredCondition[] = [
  {
    name: "NoDeath",
    weight: 5,
    check: (gameInfo) => Number(gameInfo.deaths) === 0,
  },
  {
    name: "HighKDA",
    weight: 3,
    check: (gameInfo) => {
      const kda =
        (Number(gameInfo.kills) + Number(gameInfo.assists)) /
        Math.max(1, Number(gameInfo.deaths));
      return kda > 5;
    },
  },
  // 기타 조건 추가...
];
