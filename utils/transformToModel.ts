import GameInfoDto from "@/types/GameInfoDto";

export function transformGameInfo(
  gameInfo: GameInfoDto
): Record<string, string | string[]> {
  return {
    championName: gameInfo.championName,
    teamName: gameInfo.teamName,
    playerName: gameInfo.playerName,
    kills: gameInfo.kills.toString(),
    deaths: gameInfo.deaths.toString(),
    assists: gameInfo.assists.toString(),
    items: gameInfo.items.map((item) => `${item.id}-${item.totalGold}`),
    skinID: gameInfo.skinID.toString(),
    teamPosition: gameInfo.teamPosition,
    gameVersion: gameInfo.gameVersion,
    primaryStyle: gameInfo.primaryStyle.toString(),
    subStyle: gameInfo.subStyle.toString(),
    spells: gameInfo.spells.map((spell) => spell.toString()),
    firstBloodKill: gameInfo.firstBloodKill.toString(),
    doubleKills: gameInfo.doubleKills.toString(),
    tripleKills: gameInfo.tripleKills.toString(),
    quadraKills: gameInfo.quadraKills.toString(),
    pentaKills: gameInfo.pentaKills.toString(),
  };
}
