export type GameInfoDto = {
  championName: string;
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
  locale: Locale;
  enemyChampionName: string;
};

export type ParsedQueryString = {
  championName: string;
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
  locale: Locale;
  enemyChampionName: string;
};

export interface GameInfoViewModel {
  championName: string;
  gameVersion: GameVersion;
  teamName: string;
  playerName: string;
  kills: number;
  deaths: number;
  assists: number;
  items: Item[] | [];
  teamPosition: "TOP" | "JUNGLE" | "MIDDLE" | "BOTTOM" | "UTILITY";
  primaryPerk: number;
  subPerk: number;
  spells: Spell[] | [];
  skins: {
    info: SkinInfo[] | [];
    keys: SkinKey[] | [];
  };
  firstBloodKill: boolean;
  doubleKills: number;
  tripleKills: number;
  quadraKills: number;
  pentaKills: number;
  proPlayerImageKeyList: string[] | [];
  proTeamLogoKey: string | "";
  locale: Locale;
  enemyChampionName: string;
  translatedChampionName: string;
  championPortraits: string[] | [];
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

export interface SkinInfo {
  id: string;
  num: number;
  name: string;
  chromas: boolean;
}

export interface SkinKey {
  id: string;
  key: string;
}

export interface GameVersion {
  latestVersion: string;
  prevVersion: string;
}

export type Locale =
  | "ko_KR" // 한국어
  | "en_US" // 영어
  | "zh_CN" // 중국어
  | "vi_VN"
  | "ja_JP"
  | "pl_PL"
  | "fr_FR"
  | "de_DE"
  | "es_ES"
  | "nl_NL"
  | "da_DK"
  | "sv_SE"
  | "no_NO"
  | "ru_RU"
  | "hu_HU"
  | "fi_FI"
  | "tr_TR"
  | "ro_RO"
  | "pt_BR"
  | "zh_TW"
  | "ar_SA"
  | "sr_CS"
  | "it_IT"
  | "th_TH";
