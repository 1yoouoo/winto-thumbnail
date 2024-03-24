import React from "react";
import Template0 from "@/templates/template0/Template0";
import Template1 from "./template1/Template1";
import GameInfoDto from "@/types/GameInfoDto";

type Conditions =
  | "HighKDA"
  | "SpecialSkin"
  | "ExpensiveItems1"
  | "ExpensiveItems2"
  | "ExpensiveItems3"
  | "ExpensiveItems4"
  | "ExpensiveItems5"
  | "ExpensiveItems6";

type Template = {
  component: React.FC<{ gameInfo: GameInfoDto }>;
  name: string;
  conditions: Conditions[];
};

type TemplateCondition = {
  name: Conditions;
  condition: (gameInfo: GameInfoDto) => number;
};

export const templateConditions: TemplateCondition[] = [
  {
    name: "HighKDA",
    condition: (gameInfo: GameInfoDto) => {
      const kda =
        (gameInfo.kills + gameInfo.assists) / Math.max(1, gameInfo.deaths);
      return kda > 5 ? 10 : 0;
    },
  },
  {
    name: "SpecialSkin",
    condition: (gameInfo: GameInfoDto) => (gameInfo.skinID !== 0 ? 10 : 0),
  },
  {
    name: "ExpensiveItems1",
    condition: (gameInfo: GameInfoDto) => {
      const expensiveItemsCount = [
        gameInfo.item0,
        gameInfo.item1,
        gameInfo.item2,
        gameInfo.item3,
        gameInfo.item4,
        gameInfo.item5,
        gameInfo.item6,
      ].filter((item) => item && item.totalGold >= 2400).length;
      return expensiveItemsCount === 1 ? 10 : 0;
    },
  },
  {
    name: "ExpensiveItems2",
    condition: (gameInfo: GameInfoDto) => {
      const expensiveItemsCount = [
        gameInfo.item0,
        gameInfo.item1,
        gameInfo.item2,
        gameInfo.item3,
        gameInfo.item4,
        gameInfo.item5,
        gameInfo.item6,
      ].filter((item) => item && item.totalGold >= 2400).length;
      return expensiveItemsCount === 2 ? 10 : 0;
    },
  },
  {
    name: "ExpensiveItems3",
    condition: (gameInfo: GameInfoDto) => {
      const expensiveItemsCount = [
        gameInfo.item0,
        gameInfo.item1,
        gameInfo.item2,
        gameInfo.item3,
        gameInfo.item4,
        gameInfo.item5,
        gameInfo.item6,
      ].filter((item) => item && item.totalGold >= 2400).length;
      return expensiveItemsCount === 3 ? 10 : 0;
    },
  },
  {
    name: "ExpensiveItems4",
    condition: (gameInfo: GameInfoDto) => {
      const expensiveItemsCount = [
        gameInfo.item0,
        gameInfo.item1,
        gameInfo.item2,
        gameInfo.item3,
        gameInfo.item4,
        gameInfo.item5,
        gameInfo.item6,
      ].filter((item) => item && item.totalGold >= 2400).length;
      return expensiveItemsCount === 4 ? 10 : 0;
    },
  },
  {
    name: "ExpensiveItems5",
    condition: (gameInfo: GameInfoDto) => {
      const expensiveItemsCount = [
        gameInfo.item0,
        gameInfo.item1,
        gameInfo.item2,
        gameInfo.item3,
        gameInfo.item4,
        gameInfo.item5,
        gameInfo.item6,
      ].filter((item) => item && item.totalGold >= 2400).length;
      return expensiveItemsCount === 5 ? 10 : 0;
    },
  },
  {
    name: "ExpensiveItems6",
    condition: (gameInfo: GameInfoDto) => {
      const expensiveItemsCount = [
        gameInfo.item0,
        gameInfo.item1,
        gameInfo.item2,
        gameInfo.item3,
        gameInfo.item4,
        gameInfo.item5,
        gameInfo.item6,
      ].filter((item) => item && item.totalGold >= 2400).length;
      return expensiveItemsCount === 6 ? 10 : 0;
    },
  },
];

export const templates: Template[] = [
  {
    component: Template0,
    name: "Template0",
    conditions: ["HighKDA", "ExpensiveItems3"],
  },
  {
    component: Template1,
    name: "Template1",
    conditions: ["SpecialSkin", "ExpensiveItems2"],
  },
];

export function selectTemplate(gameInfo: GameInfoDto) {
  const scoredTemplates = templates.map((template) => {
    const score = template.conditions.reduce((acc, conditionName) => {
      const condition = templateConditions.find(
        (c) => c.name === conditionName
      );
      return acc + (condition ? condition.condition(gameInfo) : 0);
    }, 0);
    return { ...template, score };
  });

  scoredTemplates.sort((a, b) => b.score - a.score);

  console.log("scoredTemplates", scoredTemplates);

  return scoredTemplates[0].component;
}
