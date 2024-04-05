import { GameInfoDto } from "@/types/v2/model";
import { capitalizeFirstLetter } from "./capitalizeFirstLetter";

export function transformToModel(
  gameInfo: GameInfoDto
): Record<string, string | string[] | undefined> {
  const transformed: Record<string, string | string[] | undefined> = {};

  try {
    transformed.championName = capitalizeFirstLetter(gameInfo.championName);

    // 선택적 필드는 존재하는 경우에만 추가
    if (gameInfo.teamName) transformed.teamName = gameInfo.teamName;
    if (gameInfo.playerName) transformed.playerName = gameInfo.playerName;
    if (typeof gameInfo.kills !== "undefined")
      transformed.kills = gameInfo.kills.toString();
    if (typeof gameInfo.deaths !== "undefined")
      transformed.deaths = gameInfo.deaths.toString();
    if (typeof gameInfo.assists !== "undefined")
      transformed.assists = gameInfo.assists.toString();
    if (gameInfo.teamPosition) transformed.teamPosition = gameInfo.teamPosition;
    if (typeof gameInfo.primaryPerk !== "undefined")
      transformed.primaryPerk = gameInfo.primaryPerk.toString();
    if (typeof gameInfo.subPerk !== "undefined")
      transformed.subPerk = gameInfo.subPerk.toString();
    if (typeof gameInfo.firstBloodKill !== "undefined")
      transformed.firstBloodKill = gameInfo.firstBloodKill.toString();
    if (typeof gameInfo.doubleKills !== "undefined")
      transformed.doubleKills = gameInfo.doubleKills.toString();
    if (typeof gameInfo.tripleKills !== "undefined")
      transformed.tripleKills = gameInfo.tripleKills.toString();
    if (typeof gameInfo.quadraKills !== "undefined")
      transformed.quadraKills = gameInfo.quadraKills.toString();
    if (typeof gameInfo.pentaKills !== "undefined")
      transformed.pentaKills = gameInfo.pentaKills.toString();

    // itemIds 처리
    if (gameInfo.itemIds) {
      transformed.itemIds = gameInfo.itemIds.map((id) => id.toString());
    }

    if (gameInfo.spellIds) {
      transformed.spellIds = gameInfo.spellIds.map((id) => id.toString());
    }
  } catch (error) {
    // error 발생시 어느 필드가 문제인지 확인하기 위해 추가
    console.error("gameInfo: ", gameInfo);
    throw error;
  }
  // 필수 필드는 바로 추가

  return transformed;
}
