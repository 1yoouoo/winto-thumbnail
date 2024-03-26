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
    item0: gameInfo.item0.toString(),
    item1: gameInfo.item1.toString(),
    item2: gameInfo.item2.toString(),
    item3: gameInfo.item3.toString(),
    item4: gameInfo.item4.toString(),
    item5: gameInfo.item5.toString(),
    item6: gameInfo.item6.toString(),
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
