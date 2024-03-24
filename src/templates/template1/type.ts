export type Template1RequiredFields = {
  championName: string;
  skinID: string;
  position: string;
  teamName: string;
  playerName: string;
  kills: string;
  deaths: string;
  assists: string;
  items: string[];
  gameVersion: string;
};

export type Template1Keys = keyof Template1RequiredFields;
