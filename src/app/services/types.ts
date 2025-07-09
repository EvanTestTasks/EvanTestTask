export type Game = {
  gameID: string;
  gameName: string;
  gameTypeID: string;
  technology: string;
  platform: string;
};

export type GameData = {
  result?: Game[];
  status?: number | string;
  error_message?: string;
};
