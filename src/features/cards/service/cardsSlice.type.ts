export type CardsT = {
  answer: string
  question: string
  cardsPack_id: string
  grade: number
  shots: number
  user_id: string
  created: string
  updated: string
  _id: string
}

export type FetchCardType = {
  cardsPack_id: string
  cardAnswer?: string
  cardQuestion?: string
  min?: number
  max?: number
  sortCards?: string
  page?: number
  pageCount?: number
}

export type ParamsCardType = {
  cardsPack_id?: string
  cardAnswer?: string
  cardQuestion?: string
  min?: number
  max?: number
  sortCards?: string
  page?: number
  pageCount?: number
}

export type FetchResponseCardsT = {
  cards: CardsT[],
  cardsTotalCount: number
  maxGrade: number
  minGrade: number
  packCreated: string
  packName: string
  packPrivate: boolean
  packUpdated: string
  packUserId: string
  page: number
  pageCount: number
  token: string
  tokenDeathTime: number
}

type requestCardType = {
  _id: string
  cardsPack_id: string
  question?: string
  answer?: string
  grade?: number
  shots?: number
  answerImg?: string
  questionImg?: string
  questionVideo?: string
  answerVideo?: string
}

export type AddCardT = Omit<requestCardType, '_id'>
export type ChangeCardT = Omit<requestCardType, 'cardsPack_id'>

