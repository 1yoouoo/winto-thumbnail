import { GameInfoDto } from "@/types/model";
import { capitalizeFirstLetter } from "./capitalizeFirstLetter";

export function transformGameInfo(
  gameInfo: GameInfoDto
): Record<string, string | string[]> {
  return {
    championName: capitalizeFirstLetter(gameInfo.championName),
    teamName: gameInfo.teamName,
    playerName: gameInfo.playerName,
    kills: gameInfo.kills.toString(),
    deaths: gameInfo.deaths.toString(),
    assists: gameInfo.assists.toString(),
    item0Id: gameInfo.item0Id.toString(),
    item1Id: gameInfo.item1Id.toString(),
    item2Id: gameInfo.item2Id.toString(),
    item3Id: gameInfo.item3Id.toString(),
    item4Id: gameInfo.item4Id.toString(),
    item5Id: gameInfo.item5Id.toString(),
    item6Id: gameInfo.item6Id.toString(),
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
