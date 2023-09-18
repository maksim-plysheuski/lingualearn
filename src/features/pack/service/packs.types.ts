//Arguments types
export type ArgFetchPacksType = {
  packName?: string;
  min?: number;
  max?: number;
  sortPacks?: string;
  page?: number;
  pageCount?: number;
  user_id?: string;
  block?: boolean;
}

export type ArgsPacksType = Pick<ArgFetchPacksType, 'packName' | 'user_id' | 'min' | 'max'>

export type ArgUpdatePackType = {
  _id: string;
  name: string;
  deckCover?: string;
  private?: boolean;
}

export type ArgCreatePackType = Omit<ArgUpdatePackType, '_id'>


//Response types
export type PackType = {
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

export type FetchPacksResponseType = {
  cardPacks: PackType[];
  cardPacksTotalCount: number;
  maxCardsCount: number;
  minCardsCount: number;
  page: number;
  pageCount: number;
  token: string;
  tokenDeathTime: number;
}

type CommonCardResponseType = Pick<FetchPacksResponseType, 'token' | 'tokenDeathTime'> & {
  newCardsPack: PackType;
  deletedCardsPack: PackType;
}

export type CreateUpdatePackResponseType = Omit<CommonCardResponseType, 'deletedCardsPack'>;
export type DeletePackResponseType = Omit<CommonCardResponseType, 'newCardsPack'>;