import { instance } from 'common/api/common.api'


export const cardsApi = {
  getCards: (arg: TGetCardsArgs) => {
    return instance.get<TGetCardsResponse>('cards/card', { params: arg }).then(res => res.data)
  },
  createCard: (arg: TCreateCardArg) => {
    return instance.post<{ newCard: TCommonCardResponse }>('cards/card', { card: arg }).then(res => res.data)
  },
  deleteCard: (arg: TDeleteArg) => {
    return instance.delete<{ deletedCard: TCommonCardResponse }>('cards/card', { params: arg }).then(res => res.data)
  },
  updateCard: (arg: TUpdateCardArg) => {
    return instance.put<{ updatedCard: TCommonCardResponse }>('cards/card', { card: arg }).then(res => res.data)
  },
  changeGrade: (arg: TChangeGradeArg) => {
    return instance.put<TChangeGradeResponse>('cards/grade', arg).then(res => res.data)
  }
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

export type TCommonCardResponse = {
  _id: string
  cardsPack_id: string
  user_id: string
  answer: string
  question: string
  grade: number
  shots: number
  comments: string
  type: string
  rating: number
  more_id: string
  created: string
  updated: string
  __v: number
  answerImg: string
  questionImg: string
}

export type TCreateCardArg = {
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

export type TDeleteArg = {
  id: string
}

export type TUpdateCardArg = {
  _id: string
  question?: string
  answer?: string
  grade?: number | null
  shots?: number
  answerImg?: string
  questionImg?: string
}


export type TChangeGradeArg = {
  grade: number
  card_id: string
}

export type TChangeGradeResponse = {
  updatedGrade: {
    _id: string
    cardsPack_id: string
    card_id: string
    user_id: string
    grade: number
    shots: number
  }
}








