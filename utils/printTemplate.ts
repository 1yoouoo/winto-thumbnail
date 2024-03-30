import {
  PreferredConditions,
  templatePreferredConditions,
} from "@/components/templatePreferredConditions";
import { Requirements } from "@/components/templateRequirement";
import { GameInfoModel } from "@/types/model";

export interface PrintTemplateProps {
  weightedTemplates: any[];
  selectedTemplate: {
    probability: number;
    score: number;
    component: React.FC<{ gameInfo: GameInfoModel }>;
    name: string;
    preferredConditions?: PreferredConditions[] | undefined;
    requirements?: Requirements[] | undefined;
    select?: boolean | undefined;
  } | null;
  gameInfo: GameInfoModel;
}

export function printTemplate({
  weightedTemplates,
  selectedTemplate,
  gameInfo,
}: PrintTemplateProps) {
  // 가중된 템플릿과 확률 정보를 담은 배열 준비
  const tableData = weightedTemplates.map((template) => {
    // 선택된 템플릿 여부 확인
    const isSelected = template === selectedTemplate;

    // template.preferredConditions에 기반한 조건들이 만족하는지 확인하여 이유를 구성
    const satisfiedConditions =
      template.preferredConditions
        ?.map((conditionName: string) => {
          const condition = templatePreferredConditions.find(
            (c) => c.name === conditionName
          );
          return condition && condition.check(gameInfo) ? conditionName : null;
        })
        .filter(Boolean) || [];

    let 이유 = satisfiedConditions.join(", ");

    return {
      여부: isSelected ? "🏅" : "", // 선택된 템플릿에는 🏅 표시
      이름: template.name,
      점수: template.score,
      확률: `${(template.probability * 100).toFixed(2)}%`,
      이유,
    };
  });

  console.table(tableData);
}
