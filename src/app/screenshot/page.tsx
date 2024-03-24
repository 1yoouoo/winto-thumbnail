"use client";
import { selectTemplate } from "@/templates/availableTemplates";
import GameInfoDto from "@/types/GameInfoDto";
import { parseItems } from "../../../utils/formatJson";

export default function Page({ searchParams }: any) {
  const gameInfo = searchParams;

  gameInfo.items = parseItems(gameInfo.items);

  const SelectedTemplate = selectTemplate(gameInfo);

  return <SelectedTemplate gameInfo={gameInfo} />;
}
