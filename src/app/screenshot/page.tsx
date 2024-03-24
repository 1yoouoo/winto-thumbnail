"use client";
import { selectTemplate } from "@/templates/availableTemplates";
import GameInfoDto from "@/types/GameInfoDto";
import { queryStringToJson } from "../../../utils/formatJson";

export default function Page({ searchParams }: { searchParams: string }) {
  console.log("searchParams", searchParams);
  const gameInfo = queryStringToJson(searchParams);

  console.log("gameInfo", gameInfo);

  // const SelectedTemplate = selectTemplate(gameInfo);

  // return <SelectedTemplate gameInfo={gameInfo} />;
}
