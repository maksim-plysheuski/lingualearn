import { instance } from 'common'


export const cardsApi = {
  getCards: (arg: TGetCardsArgs) => {
    return instance.get<TGetCardsResponse>('cards/card', { params: arg }).then(res => res.data)
  },
  createCard: (arg: TCreateCardArg) => {
    return instance.post<{ newCard: TCard }>('cards/card', { card: arg }).then(res => res.data)
  },
  deleteCard: (arg: TDeleteCardArg) => {
    return instance.delete<{ deletedCard: TCard }>('cards/card', { params: arg }).then(res => res.data)
  },
  updateCard: (arg: TUpdateCardArg) => {
    return instance.put<{ updatedCard: TCard }>('cards/card', { card: arg }).then(res => res.data)
  },
  changeGrade: (arg: TChangeGradeArg) => {
    return instance.put<TChangeGradeResponse>('cards/grade', arg).then(res => res.data)
  }
}

//Arguments types
type TCommonArg = {
  question?: string
  answer?: string
  grade?: number
  shots?: number
  answerImg?: string
  questionImg?: string
}

export type TGetCardsArgs = {
  cardsPack_id: string
  cardAnswer?: string
  cardQuestion?: string
  min?: number
  max?: number
  page?: number
  pageCount?: number
  sortCards?: string
}

export type TCreateCardArg = TCommonArg & { cardsPack_id: string }
export type TUpdateCardArg = TCommonArg & { _id: string }
export type TDeleteCardArg = { id: string }
export type TChangeGradeArg = { grade: number, card_id: string }

//Response types
export type TCard = {
  answer: string
  question: string
  cardsPack_id: string
  grade: number
  shots: number
  user_id: string
  created: string
  updated: string
  _id: string
  answerImg?: string
  questionImg?: string
}

export type TGetCardsResponse = {
  cards: TCard[]
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
}

export type TChangeGradeResponse = {
  updatedGrade: Pick<TCard, '_id' | 'cardsPack_id' | 'user_id' | 'grade' | 'shots'> & { card_id: string }
}