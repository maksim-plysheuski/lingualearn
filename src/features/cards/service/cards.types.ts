//Arguments types
type CardGradeType = 0 | 1 | 2 | 3 | 4 | 5;

export type ArgFetchCardsType = {
  cardsPack_id: string
  cardAnswer?: string
  cardQuestion?: string
  min?: number
  max?: number
  page?: number
  pageCount?: number
  sortCards?: string
}

type CreateUpdateCardType = {
  _id: string;
  cardsPack_id: string;
  question?: string;
  answer?: string;
  grade?: CardGradeType;
  shots?: number;
  answerImg?: string;
  questionImg?: string;
  questionVideo?: string;
  answerVideo?: string;
};

export type ArgCreateCardType = Omit<CreateUpdateCardType, '_id'>;
export type ArgUpdateCardType = Omit<CreateUpdateCardType, 'cardsPack_id'>;
export type ArgChangeGradeType = { grade: number, card_id: string, packId: string }


//Response types
export type CardType = {
  _id: string;
  cardsPack_id: string;
  user_id: string;
  answer: string;
  question: string;
  grade: CardGradeType;
  shots: number;
  comments: string;
  type: string;
  rating: number;
  more_id: string;
  created: string;
  updated: string;
  __v: number;
  answerImg?: string;
  answerVideo?: string;
  questionImg?: string;
  questionVideo?: string;
};

type CommonCardResponseType = {
  newCard: CardType;
  deletedCard: CardType;
  updatedCard: CardType;
  token: string;
  tokenDeathTime: number;
};

export type CreateCardResponseType = Omit<CommonCardResponseType, 'deletedCard' | 'updatedCard'>;
export type DeleteCardResponseType = Omit<CommonCardResponseType, 'newCard' | 'updatedCard'>;
export type UpdateCardResponseType = Omit<CommonCardResponseType, 'newCard' | 'deletedCard'>;
export type ChangeGradeResponseType = { updatedGrade: CardType }

export type FetchCardsResponseType = {
  cards: CardType[]
  packPrivate: boolean
  cardsTotalCount: number
  maxGrade: number
  minGrade: number
  page: number
  pageCount: number
  packUserId: string
  packName: string
  packDeckCover: string
  packCreated: string
  token: string;
  tokenDeathTime: number;
}