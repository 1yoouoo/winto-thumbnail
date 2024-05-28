import { GameInfoViewModel, Locale } from "@/types/v2/model";
import { Requirements, templateRequirements } from "./templateRequirement";
import {
  PreferredConditions,
  templatePreferredConditions,
} from "./templatePreferredConditions";
import { printTemplate } from "../../../utils/v2/printTemplate";

import en_US_Template0 from "@/templates/v2/en_US/Template0";
import en_US_Template1 from "@/templates/v2/en_US/Template1";
import en_US_Template2 from "@/templates/v2/en_US/Template2";
import en_US_Template3 from "@/templates/v2/en_US/Template3";
import en_US_Template4 from "@/templates/v2/en_US/Template4";
import en_US_Template5 from "@/templates/v2/en_US/Template5";

import ko_KR_Template0 from "@/templates/v2/ko_KR/Template0";
import ko_KR_Template1 from "@/templates/v2/ko_KR/Template1";
import ko_KR_Template2 from "@/templates/v2/ko_KR/Template2";
import ko_KR_Template3 from "@/templates/v2/ko_KR/Template3";
import ko_KR_Template4 from "@/templates/v2/ko_KR/Template4";
import ko_KR_Template5 from "@/templates/v2/ko_KR/Template5";

import DefaultTemplate from "@/templates/v2/DefaultTemplate";

type Template = {
  component: React.FC<{ gameInfo: GameInfoViewModel }>;
  name: string;
  preferredConditions?: PreferredConditions[];
  requirements?: Requirements[];
  locale?: Locale;
  select?: boolean;
};

export const templates: Template[] = [
  {
    component: en_US_Template1,
    name: "Template1 (en_US)",
    preferredConditions: ["NoDeath", "HighKDA", "PlayerName"],
    requirements: ["Over3ItemsWithGoldOver2000", "KDA", "HasProPlayerImage"],
    locale: "en_US",
  },
  {
    component: en_US_Template2,
    name: "Template2 (en_US)",
    preferredConditions: ["NoDeath", "HighKDA", "PlayerName"],
    requirements: ["Over2ItemsWithGoldOver2000", "KDA", "HasProPlayerImage"],
    locale: "en_US",
  },
  {
    component: en_US_Template3,
    name: "Template3 (en_US)",
    preferredConditions: ["NoDeath", "HighKDA", "PlayerName"],
    requirements: ["Over1ItemsWithGoldOver2000", "KDA", "HasProPlayerImage"],
    locale: "en_US",
  },
  {
    component: en_US_Template4,
    name: "Template4 (en_US)",
    preferredConditions: ["PlayerName"],
    requirements: ["Over0ItemsWithGoldOver2000", "HasProPlayerImage"],
    locale: "en_US",
  },
  {
    component: en_US_Template5,
    name: "Template5 (en_US)",
    preferredConditions: ["TripleKills", "QuadraKills", "PentaKills"],
    requirements: [
      "Over1ItemsWithGoldOver2000",
      "HasProPlayerImage",
      "MultiKills",
    ],
    locale: "en_US",
  },

  {
    component: ko_KR_Template1,
    name: "Template1 (ko_KR)",
    preferredConditions: ["NoDeath", "HighKDA", "PlayerName"],
    requirements: ["Over3ItemsWithGoldOver2000", "KDA", "HasProPlayerImage"],
    locale: "ko_KR",
  },
  {
    component: ko_KR_Template2,
    name: "Template2 (ko_KR)",
    preferredConditions: ["NoDeath", "HighKDA", "PlayerName"],
    requirements: ["Over2ItemsWithGoldOver2000", "KDA", "HasProPlayerImage"],
    locale: "ko_KR",
  },
  {
    component: ko_KR_Template3,
    name: "Template3 (ko_KR)",
    preferredConditions: ["NoDeath", "HighKDA", "PlayerName"],
    requirements: ["Over1ItemsWithGoldOver2000", "KDA", "HasProPlayerImage"],
    locale: "ko_KR",
  },
  {
    component: ko_KR_Template4,
    name: "Template4 (ko_KR)",
    preferredConditions: ["PlayerName"],
    requirements: ["Over0ItemsWithGoldOver2000", "HasProPlayerImage"],
    locale: "ko_KR",
    select: true,
  },
  {
    component: ko_KR_Template5,
    name: "Template5 (ko_KR)",
    preferredConditions: ["TripleKills", "QuadraKills", "PentaKills"],
    requirements: [
      "Over1ItemsWithGoldOver2000",
      "HasProPlayerImage",
      "MultiKills",
    ],
    locale: "ko_KR",
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

  // Step 1: 지역에 따라 템플릿 필터링
  let matchingTemplates = templates.filter((t) => t.locale === gameInfo.locale);

  // Fallback: 사용자 지역에 맞는 템플릿이 없는 경우, 기본 언어(en_US)로 필터링
  if (matchingTemplates.length === 0) {
    matchingTemplates = templates.filter((t) => t.locale === "en_US");
  }

  // Step 2: requirements를 만족하지 않는 템플릿 제외
  const filteredTemplates = matchingTemplates.filter((template) =>
    (template.requirements ?? []).every((reqCondition) =>
      templateRequirements
        .find((cond) => cond.name === reqCondition)
        ?.check(gameInfo)
    )
  );
  // Step 3: preferredConditions에 해당하는 조건을 만족할 때마다 가중치를 반영하여 점수 부여
  const scoredTemplates = filteredTemplates.map((template) => {
    let score = 0; // 기본 점수 1점 부여
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

  // Step 4: 가중점수에 따라 선택 확률 조정
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
  if (process.env.NODE_ENV === "development")
    printTemplate({ weightedTemplates, gameInfo });

  // 선택된 템플릿의 컴포넌트 반환 또는 기본값 반환
  let defaultTemplate;
  switch (gameInfo.locale) {
    case "ko_KR":
      defaultTemplate = ko_KR_Template0;
      break;

    case "en_US":
      defaultTemplate = en_US_Template0;
      break;

    default:
      defaultTemplate = DefaultTemplate;
      break;
  }

  return {
    component: selectedTemplate ? selectedTemplate.component : defaultTemplate,
    name: selectedTemplate?.name ?? "DefaultTemplate",
  };
}
