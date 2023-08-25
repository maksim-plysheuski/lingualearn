

//Response types
export type TPack = {
  _id: string;
  user_id: string;
  user_name: string;
  name: string;
  private: boolean;
  path: string;
  grade: number;
  shots: number;
  cardsCount: number;
  type: string;
  deckCover: string;
  rating: number;
  more_id: string;
  created: string;
  updated: string;
  __v: number;
};

export type TPacksResponse = {
  cardPacks: TPack[];
  cardPacksTotalCount: number;
  maxCardsCount: number;
  minCardsCount: number;
  page: number;
  pageCount: number;
  token: string;
  tokenDeathTime: number;
}

//Arguments types
export type FetchPacksArgType = {
  packName?: string;
  min?: number;
  max?: number;
  sortPacks?: string;
  page?: number;
  pageCount?: number;
  user_id?: string;
  block?: boolean;
}

export type PackArgs = Pick<FetchPacksArgType, 'packName' | 'user_id'> & {
  min?: string;
  max?: string;
}

export type TCreatePackArg = {
  name: string;
  deckCover?: string;
  private?: boolean;
}

export type TUpdatePackArg = Pick<TCreatePackArg, 'name' | 'deckCover' | 'private'> & { _id: string }