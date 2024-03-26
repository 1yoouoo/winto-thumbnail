import React from "react";
import GameInfoDto from "@/types/GameInfoDto";
import { printTemplates } from "../../utils/printTemplate";
import Template1 from "./template1/Template1";
import Template0 from "./template0/Template0";

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

function printTemplate(template: any) {
  const nameString = `name: '${template.name}'`.padEnd(35, " ");
  const scoreString = `score: ${template.score}`.padEnd(35, " ");
  console.log(`  ╔═════════════════════════════════════╗`);
  console.log(`  ║  ${nameString}║`);
  console.log(`  ║  ${scoreString}║`);
  console.log(`  ╚═════════════════════════════════════╝`);
}

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
    name: "ExpensiveItems1",
    condition: (gameInfo: GameInfoDto) => {
      const items = [
        gameInfo.item0,
        gameInfo.item1,
        gameInfo.item2,
        gameInfo.item3,
        gameInfo.item4,
        gameInfo.item5,
        gameInfo.item6,
      ];
      return items.filter((item) => item >= 2400).length >= 1 ? 10 : 0;
    },
  },
  {
    name: "ExpensiveItems2",
    condition: (gameInfo: GameInfoDto) => {
      const items = [
        gameInfo.item0,
        gameInfo.item1,
        gameInfo.item2,
        gameInfo.item3,
        gameInfo.item4,
        gameInfo.item5,
        gameInfo.item6,
      ];
      return items.filter((item) => item >= 2400).length >= 2 ? 10 : 0;
    },
  },
  {
    name: "ExpensiveItems3",
    condition: (gameInfo: GameInfoDto) => {
      const items = [
        gameInfo.item0,
        gameInfo.item1,
        gameInfo.item2,
        gameInfo.item3,
        gameInfo.item4,
        gameInfo.item5,
        gameInfo.item6,
      ];
      return items.filter((item) => item >= 2400).length >= 3 ? 10 : 0;
    },
  },
  {
    name: "ExpensiveItems4",
    condition: (gameInfo: GameInfoDto) => {
      const items = [
        gameInfo.item0,
        gameInfo.item1,
        gameInfo.item2,
        gameInfo.item3,
        gameInfo.item4,
        gameInfo.item5,
        gameInfo.item6,
      ];
      return items.filter((item) => item >= 2400).length >= 4 ? 10 : 0;
    },
  },
  {
    name: "ExpensiveItems5",
    condition: (gameInfo: GameInfoDto) => {
      const items = [
        gameInfo.item0,
        gameInfo.item1,
        gameInfo.item2,
        gameInfo.item3,
        gameInfo.item4,
        gameInfo.item5,
        gameInfo.item6,
      ];
      return items.filter((item) => item >= 2400).length >= 5 ? 10 : 0;
    },
  },
  {
    name: "ExpensiveItems6",
    condition: (gameInfo: GameInfoDto) => {
      const items = [
        gameInfo.item0,
        gameInfo.item1,
        gameInfo.item2,
        gameInfo.item3,
        gameInfo.item4,
        gameInfo.item5,
        gameInfo.item6,
      ];
      return items.filter((item) => item >= 2400).length >= 6 ? 10 : 0;
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
    conditions: ["SpecialSkin", "ExpensiveItems3"],
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

  const selectedTemplate = scoredTemplates[0];

  printTemplates(scoredTemplates);

  return selectedTemplate;
}
