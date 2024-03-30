import { GameInfoModel } from "@/types/model";

export type Requirements = "Over1Items" | "Over2Items" | "Over3Items";

type TemplateRequirement = {
  name: Requirements;
  // eslint-disable-next-line no-unused-vars
  check: (gameInfo: GameInfoModel) => boolean;
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
  // 기타 조건 추가...
];
