import React from "react";
import { printTemplate } from "../../utils/printTemplate";
import Template0 from "./template0/Template0";
import Template2 from "./template2/Template2";
import { GameInfoModel } from "@/types/model";
import {
  PreferredConditions,
  templatePreferredConditions,
} from "./templatePreferredConditions";
import { Requirements, templateRequirements } from "./templateRequirement";

type Template = {
  component: React.FC<{ gameInfo: GameInfoModel }>;
  name: string;
  preferredConditions?: PreferredConditions[];
  requirements?: Requirements[];
};

export const templates: Template[] = [
  {
    component: Template0,
    name: "Template0",
  },
  {
    component: Template2,
    name: "Template2",
    preferredConditions: ["NoDeath", "HighKDA"],
    requirements: ["Over3Items"],
  },
  // 기타 템플릿 추가...
];

export function selectTemplate(
  gameInfo: GameInfoModel
): React.FC<{ gameInfo: GameInfoModel }> {
  // Step 1: requirements를 만족하지 않는 템플릿 제외
  const filteredTemplates = templates.filter((template) =>
    (template.requirements ?? []).every((reqCondition) =>
      templateRequirements
        .find((cond) => cond.name === reqCondition)
        ?.check(gameInfo)
    )
  );

  // Step 2: preferredConditions에 해당하는 조건을 만족할 때마다 가중점수 부여
  const scoredTemplates = filteredTemplates.map((template) => {
    const score = (template.preferredConditions ?? []).reduce(
      (acc, prefCondition) => {
        const condition = templatePreferredConditions.find(
          (cond) => cond.name === prefCondition
        );
        return acc + (condition && condition.check(gameInfo) ? 1 : 0); // 조건을 만족하면 점수를 1씩 추가
      },
      0
    );
    return { ...template, score };
  });

  // Step 3: 가중점수에 따라 선택 확률 조정
  const totalScore = scoredTemplates.reduce(
    (acc, template) => acc + template.score,
    0
  );
  const weightedTemplates = scoredTemplates.map((template) => ({
    ...template,
    probability: template.score / totalScore,
  }));

  // Step 4: 조정된 확률에 따라 랜덤하게 하나의 템플릿 선택
  const randomPick = Math.random();
  let cumulativeProbability = 0;
  let selectedTemplate = null;

  for (const template of weightedTemplates) {
    cumulativeProbability += template.probability;
    if (randomPick < cumulativeProbability) {
      selectedTemplate = template; // 선택된 템플릿 저장
      break;
    }
  }

  // 선택된 템플릿과 weightedTemplates 배열을 출력합니다.
  printTemplate(weightedTemplates, selectedTemplate);

  // 선택된 템플릿의 컴포넌트 반환 또는 기본값 반환
  return selectedTemplate ? selectedTemplate.component : Template0;
}
