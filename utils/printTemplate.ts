import { templatePreferredConditions } from "@/components/templatePreferredConditions";
import { GameInfoModel } from "@/types/model";

export interface PrintTemplateProps {
  weightedTemplates: any[];
  gameInfo: GameInfoModel;
}

export function printTemplate({
  weightedTemplates,
  gameInfo,
}: PrintTemplateProps) {
  // 가중된 템플릿과 확률 정보를 담은 배열 준비
  const tableData = weightedTemplates.map((template) => {
    // 선택된 템플릿 여부 확인

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
      이름: template.name,
      점수: template.score,
      확률: `${(template.probability * 100).toFixed(2)}%`,
      이유,
    };
  });

  console.table(tableData);
}
