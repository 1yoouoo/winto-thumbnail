import { GameInfoDto } from "@/types/v2/model";
import { capitalizeFirstLetter } from "./capitalizeFirstLetter";
import { sendSlackNotification } from "./sendSlackNotification";

export function transformToModel(
  gameInfo: GameInfoDto
): Record<string, string | string[]> {
  const transformed: Record<string, string | string[]> = {};

  try {
    transformed.championName = capitalizeFirstLetter(gameInfo.championName);
    transformed.teamName = gameInfo.teamName;
    transformed.playerName = gameInfo.playerName;
    transformed.kills = gameInfo.kills.toString();
    transformed.deaths = gameInfo.deaths.toString();
    transformed.assists = gameInfo.assists.toString();
    transformed.primaryPerk = gameInfo.primaryPerk.toString();
    transformed.teamPosition = gameInfo.teamPosition;
    transformed.subPerk = gameInfo.subPerk.toString();
    transformed.primaryPerk = gameInfo.primaryPerk.toString();
    transformed.subPerk = gameInfo.subPerk.toString();
    transformed.firstBloodKill = gameInfo.firstBloodKill.toString();
    transformed.doubleKills = gameInfo.doubleKills.toString();
    transformed.tripleKills = gameInfo.tripleKills.toString();
    transformed.quadraKills = gameInfo.quadraKills.toString();
    transformed.pentaKills = gameInfo.pentaKills.toString();
    transformed.locale = gameInfo.locale.toString();
    transformed.itemIds = gameInfo.itemIds.map((id) => id.toString());
    transformed.spellIds = gameInfo.spellIds.map((id) => id.toString());
    transformed.enemyChampionName = capitalizeFirstLetter(
      gameInfo.enemyChampionName
    );
  } catch (error: any) {
    sendSlackNotification({
      title: "transfromToModel에서 에러 발생",
      details: error.toString(),
    });
    console.error("transfrom To Model 에서 에러 발생 : ", error);
    throw error;
  }

  return transformed;
}
