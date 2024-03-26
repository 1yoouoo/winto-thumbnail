type GameInfoDto = {
  championName: string;
  teamName: string;
  playerName: string;
  kills: number;
  deaths: number;
  assists: number;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
  teamPosition: "TOP" | "JUNGLE" | "MIDDLE" | "BOTTOM" | "UTILITY";
  gameVersion: string;
  primaryStyle: number; // perks/styles: 주 룬
  subStyle: number; // perks/styles: 부 룬
  spells: number[] | string[]; // 사용된 스펠 (예: ["2201"]) | 사용된 스펠 (예: ["SummonerFlash"]) 확실하지않음
  firstBloodKill: boolean; // 첫 킬 여부
  doubleKills: number; // 더블킬 수
  tripleKills: number; // 트리플킬 수
  quadraKills: number; // 쿼드라킬 수
  pentaKills: number; // 펜타킬 수
};

export default GameInfoDto;
