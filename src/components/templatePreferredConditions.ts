import { GameInfoModel } from "@/types/model";

export type PreferredConditions = "NoDeath" | "HighKDA" | "SpecialSkin";

type TemplatePreferredCondition = {
  name: PreferredConditions;
  // eslint-disable-next-line no-unused-vars
  check: (gameInfo: GameInfoModel) => boolean;
};

export const templatePreferredConditions: TemplatePreferredCondition[] = [
  {
    name: "NoDeath",
    check: (gameInfo) => Number(gameInfo.deaths) === 0,
  },

  {
    name: "HighKDA",
    check: (gameInfo) => {
      const kda =
        (gameInfo.kills + gameInfo.assists) / Math.max(1, gameInfo.deaths);
      return kda > 5;
    },
  },
  // 기타 조건 추가...
];
