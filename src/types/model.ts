export type GameInfoDto = {
  championName: string;
  teamName: string;
  playerName: string;
  kills: number;
  deaths: number;
  assists: number;
  item0Id: number;
  item1Id: number;
  item2Id: number;
  item3Id: number;
  item4Id: number;
  item5Id: number;
  item6Id: number;
  teamPosition: "TOP" | "JUNGLE" | "MIDDLE" | "BOTTOM" | "UTILITY";
  gameVersion: string;
  primaryStyle: number; // perks/styles: 주 룬
  subStyle: number; // perks/styles: 부 룬
  spells: string[]; // 사용된 스펠 (예: ["SummonerFlash"]) https://ddragon.leagueoflegends.com/cdn/10.3.1/img/spell/SummonerFlash.png
  firstBloodKill: boolean; // 첫 킬 여부
  doubleKills: number; // 더블킬 수
  tripleKills: number; // 트리플킬 수
  quadraKills: number; // 쿼드라킬 수
  pentaKills: number; // 펜타킬 수
};

export interface GameInfoModel {
  championName: string;
  teamName: string;
  playerName: string;
  kills: number;
  deaths: number;
  assists: number;
  items: Item[];
  skinId: number;
  teamPosition: "TOP" | "JUNGLE" | "MIDDLE" | "BOTTOM" | "UTILITY";
  gameVersion: string;
  primaryStyle: number;
  subStyle: number;
  spells: string[];
  firstBloodKill: boolean;
  doubleKills: number;
  tripleKills: number;
  quadraKills: number;
  pentaKills: number;
}

export interface Item {
  id: number;
  totalGold: number;
}
