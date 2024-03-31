import { GameInfoDto } from "@/types/v2/model";
import { capitalizeFirstLetter } from "../capitalizeFirstLetter";
import { normalizeGameVersion } from "../normalizeGameVersion";

export function transformGameInfo(
  gameInfo: GameInfoDto
): Record<string, string | string[] | undefined> {
  const transformed: Record<string, string | string[] | undefined> = {};

  // 필수 필드는 바로 추가
  transformed.championName = capitalizeFirstLetter(gameInfo.championName);
  transformed.gameVersion = normalizeGameVersion(gameInfo.gameVersion);

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

  return transformed;
}
