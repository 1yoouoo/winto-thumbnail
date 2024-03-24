export interface Template0RequiredFields {
  championName: string;
  teamName: string;
  playerName: string;
  kills: string;
  deaths: string;
  assists: string;
  items: string[];
}

export type Template0Keys = keyof Template0RequiredFields;
