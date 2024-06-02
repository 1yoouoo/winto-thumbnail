import { GameInfoViewModel } from "@/types/v2/model";

export type PreferredConditions =
  | "NoDeath"
  | "HighKDA"
  | "PlayerName"
  | "HasProPlayerImage"
  | "TripleKills"
  | "QuadraKills"
  | "PentaKills";

type TemplatePreferredCondition = {
  name: PreferredConditions;
  weight: number;
  // eslint-disable-next-line no-unused-vars
  check: (gameInfo: GameInfoViewModel) => boolean;
};

export const templatePreferredConditions: TemplatePreferredCondition[] = [
  {
    name: "NoDeath",
    weight: 200,
    check: (gameInfo) => Number(gameInfo.deaths) === 0,
  },
  {
    name: "HighKDA",
    weight: 50,
    check: (gameInfo) => {
      const kda =
        (Number(gameInfo.kills) + Number(gameInfo.assists)) /
        Math.max(1, Number(gameInfo.deaths));
      return kda > 5;
    },
  },
  {
    name: "PlayerName",
    weight: 10,
    check: (gameInfo) => gameInfo.playerName !== undefined,
  },
  {
    name: "HasProPlayerImage",
    weight: 500,
    check: (gameInfo: GameInfoViewModel) => {
      return (gameInfo.proPlayerImageKeyList ?? []).length > 0;
    },
  },
  {
    name: "TripleKills",
    weight: 5,
    check: (gameInfo) =>
      Number(gameInfo.tripleKills) >= 1 &&
      Number(gameInfo.quadraKills) < 1 &&
      Number(gameInfo.pentaKills) < 1,
  },
  {
    name: "QuadraKills",
    weight: 400,
    check: (gameInfo) =>
      Number(gameInfo.quadraKills) >= 1 && Number(gameInfo.pentaKills) < 1,
  },
  {
    name: "PentaKills",
    weight: 1000,
    check: (gameInfo) => Number(gameInfo.pentaKills) >= 1,
  },

  // 기타 조건 추가...
];
