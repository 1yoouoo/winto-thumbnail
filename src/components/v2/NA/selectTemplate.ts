import { GameInfoViewModel } from "@/types/v2/model";
import { printTemplate } from "@/app/utils/v2/printTemplate";
import {
  PreferredConditions,
  templatePreferredConditions,
} from "../templatePreferredConditions";
import { Requirements, templateRequirements } from "../templateRequirement";
import Template1 from "@/templates/v2/NA/Template1";
import DefaultTemplate from "@/templates/v2/NA/DefaultTemplate";

type Template = {
  component: React.FC<{ gameInfo: GameInfoViewModel }>;
  name: string;
  preferredConditions?: PreferredConditions[];
  requirements?: Requirements[];
  select?: boolean;
};

export const templates: Template[] = [
  {
    component: Template1,
    name: "Template1[NA]",
  },

  // 기타 템플릿 추가...
];

export function selectTemplate(gameInfo: GameInfoViewModel): {
  component: React.FC<{ gameInfo: GameInfoViewModel }>;
  name: string;
} {
  // Step 0: 개발 모드용 선택 로직 추가
  const developmentTemplate = templates.find(
    (template) => template.select === true
  );
  if (developmentTemplate && process.env.NODE_ENV === "development") {
    console.log(
      `🌠🌠🌠🌠🌠 ${developmentTemplate.name}이 선택되었습니다. 개발 모드에서만 사용됩니다. 🌠🌠🌠🌠🌠`
    );
    return {
      component: developmentTemplate.component,
      name: developmentTemplate.name,
    };
  }

  // Step 1: requirements를 만족하지 않는 템플릿 제외
  const filteredTemplates = templates.filter((template) =>
    (template.requirements ?? []).every((reqCondition) =>
      templateRequirements
        .find((cond) => cond.name === reqCondition)
        ?.check(gameInfo)
    )
  );

  // Step 2: preferredConditions에 해당하는 조건을 만족할 때마다 가중치를 반영하여 점수 부여
  const scoredTemplates = filteredTemplates.map((template) => {
    let score = 1; // 기본 점수 1점 부여
    score += (template.preferredConditions ?? []).reduce(
      (acc, prefCondition) => {
        const condition = templatePreferredConditions.find(
          (c) => c.name === prefCondition
        );
        return (
          acc + (condition && condition.check(gameInfo) ? condition.weight : 0)
        );
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
  if (process.env.NODE_ENV === "development") {
    printTemplate({ weightedTemplates, gameInfo });
  }

  // 선택된 템플릿의 컴포넌트 반환 또는 기본값 반환

  return {
    component: selectedTemplate?.component ?? DefaultTemplate,
    name: selectedTemplate?.name ?? "",
  };
}
