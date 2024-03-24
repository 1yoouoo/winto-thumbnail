export namespace ReplayDto {
  export type GameData = {
    activePlayer: ActivePlayer;
    allPlayers: Player[];
    events: Events;
    gameData: GameDetails;
  };

  export type ActivePlayer = {
    error: string;
  };

  export type Player = {
    championName: string;
    isBot: boolean;
    isDead: boolean;
    items: Item[];
    level: number;
    position: string;
    rawChampionName: string;
    rawSkinName: string;
    respawnTimer: number;
    runes: Runes;
    scores: Scores;
    screenPositionBottom: string;
    screenPositionCenter: string;
    skinID: number;
    skinName: string;
    summonerName: string;
    summonerSpells: SummonerSpells;
    team: string;
  };

  export type Item = {
    canUse: boolean;
    consumable: boolean;
    count: number;
    displayName: string;
    itemID: number;
    price: number;
    rawDescription: string;
    rawDisplayName: string;
    slot: number;
  };

  export type Runes = {
    keystone: Keystone;
    primaryRuneTree: RuneTree;
    secondaryRuneTree: RuneTree;
  };

  export type Keystone = {
    displayName: string;
    id: number;
    rawDescription: string;
    rawDisplayName: string;
  };

  export type RuneTree = {
    displayName: string;
    id: number;
    rawDescription: string;
    rawDisplayName: string;
  };

  export type Scores = {
    assists: number;
    creepScore: number;
    deaths: number;
    kills: number;
    wardScore: number;
  };

  export type SummonerSpells = {
    summonerSpellOne: SummonerSpell;
    summonerSpellTwo: SummonerSpell;
  };

  export type SummonerSpell = {
    displayName: string;
    rawDescription: string;
    rawDisplayName: string;
  };

  export type Events = {
    Events: Event[];
  };

  export type Event = {
    EventID: number;
    EventName: string;
    EventTime: number;
    Assisters?: string[];
    KillerName?: string;
    VictimName?: string;
    KillStreak?: number;
  };

  export type GameDetails = {
    gameMode: string;
    gameTime: number;
    mapName: string;
    mapNumber: number;
    mapTerrain: string;
  };
}
