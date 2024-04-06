export type GameInfoDto = {
  championName: string; // 필수
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

/**
 *   LPL: {
    BLG: ['Bilibili Gaming'],
    TES: ['Top Esports'],
    JDG: ['JD Gaming'],
    FPX: ['FunPlus Phoenix'],
    NIP: ['Ninjas in Pyjamas'],
    LNG: ['LNG Esports'],
    WB: ['Weibo Gaming'],
    OMG: ['OMG', 'Oh My God'],
    WE: ['Team WE'],
    IG: ['Invictus Gaming'],
    AL: [`Anyone's Legend`],
    LGD: ['LGD Gaming'],
    EDG: ['Edward Gaming'],
  },
  LEC: {
    VIT: ['Team Vitality'],
    TH: ['Team Heretics'],
    FNC: ['Fnatic'],
    G2: ['G2 Esports'],
    BDS: ['BDS Esport', 'BDS'],
    GX: ['GIANTS Gaming', 'Giants'],
    MDK: ['MAD Lions', 'MAD', 'MAD Lions KOI'],
    SK: ['SK Gaming'],
    BGE: ['Bogue'],
    KC: ['Karmine Corp'],
  },
  LCK: {
    T1: ['SK Telecom T1', 'T1 Esports', 'T1', 'SKT T1'],
    GEN: ['Gen.G Esports', 'Gen.G'],
    HLE: ['Hanwha Life Esports'],
    KT: ['KT Rolster', 'KT'],
    DK: ['DAMWON Gaming', 'DWG KIA', 'Dplus KIA'],
    KDF: ['Kwangdong Freecs', 'Kwangdong'],
    FOX: ['FearX'],
    NS: ['Nongshim RedForce', 'NS RedForce'],
    DRX: ['DRX'],
    BRO: ['BRION', 'OKSavingsBank BRION'],
  },
  LCS: {
    '100': ['100 Thieves'],
    FLY: ['FlyQuest'],
    C9: ['Cloud9'],
    TL: ['Team Liquid'],
    DIG: ['Dignitas'],
    NRG: ['NRG Esports'],
    SR: ['Shopify Rebellion'],
    IMT: ['Immortals'],
  },
};
 */
