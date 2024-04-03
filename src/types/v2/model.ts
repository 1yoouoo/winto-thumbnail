export type GameInfoDto = {
  championName: string; // 필수
  gameVersion: string; // 필수
} & Partial<{
  teamName: string;
  playerName: string;
  kills: number;
  deaths: number;
  assists: number;
  itemIds: number[];
  teamPosition: "TOP" | "JUNGLE" | "MIDDLE" | "BOTTOM" | "UTILITY";
  primaryPerk: number;
  subPerk: number;
  spellIds: number[];
  firstBloodKill: boolean;
  doubleKills: number;
  tripleKills: number;
  quadraKills: number;
  pentaKills: number;
}>;

export type ParsedQueryString = {
  championName: string; // 필수
  gameVersion: string; // 필수
} & Partial<{
  teamName: string;
  playerName: string;
  kills: string;
  deaths: string;
  assists: string;
  itemIds: string[];
  teamPosition: "TOP" | "JUNGLE" | "MIDDLE" | "BOTTOM" | "UTILITY";
  primaryPerk: string;
  subPerk: string;
  spellIds: string[];
  firstBloodKill: string;
  doubleKills: string;
  tripleKills: string;
  quadraKills: string;
  pentaKills: string;
}>;

export interface GameInfoModel {
  championName: string;
  gameVersion: string;
  teamName?: string;
  playerName?: string;
  kills?: string;
  deaths?: string;
  assists?: string;
  itemIds?: string[];
  teamPosition?: "TOP" | "JUNGLE" | "MIDDLE" | "BOTTOM" | "UTILITY";
  primaryPerk?: string;
  subPerk?: string;
  spellIds?: string[];
  firstBloodKill?: string;
  doubleKills?: string;
  tripleKills?: string;
  quadraKills?: string;
  pentaKills?: string;
}

export interface GameInfoViewModel {
  championName: string;
  gameVersion: string;
  teamName?: string;
  playerName?: string;
  kills?: number;
  deaths?: number;
  assists?: number;
  items?: Item[];
  teamPosition?: "TOP" | "JUNGLE" | "MIDDLE" | "BOTTOM" | "UTILITY";
  primaryPerk?: number;
  subPerk?: number;
  spells?: Spell[];
  skins?: Skin[];
  firstBloodKill?: boolean;
  doubleKills?: number;
  tripleKills?: number;
  quadraKills?: number;
  pentaKills?: number;
}

export interface Item {
  id: number;
  totalGold: number;
  name: string;
}

export interface Spell {
  id: number;
  name: string;
}

export interface Skin {
  id: string;
  num: number;
  name: string;
  chromas: boolean;
}
