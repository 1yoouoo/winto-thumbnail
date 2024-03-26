"use client";

import { selectTemplate } from "@/templates/availableTemplates";
import { parseItems } from "../../../utils/formatJson";

export default function Page({ searchParams }: any) {
  const gameInfo = searchParams;

  gameInfo.items = parseItems(gameInfo.items);

  const SelectedTemplate = selectTemplate(gameInfo);

  const SelectedTemplateComponent = SelectedTemplate.component;

  return <SelectedTemplateComponent gameInfo={gameInfo} />;
}

// GameInfoDto에서 optional로 바꿀 수 있는 거 바꾸기

// item id 만 받기

// skin id 빼기

// item id로 item 정보 받기
