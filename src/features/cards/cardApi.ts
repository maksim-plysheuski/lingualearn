import {instance} from "../../common/api/common.api";

export const cardApi = {
    fetchCards: (arg: TFetchArgs) => {
        return instance.get<TFetchResponse>('/cards/card', {params: {...arg}}).then(res => res.data)
    },
    createCard: (arg: TCreateArg) => {
        return instance.post<TCreateResponse>('/cards/card', arg).then(res => res.data)
    },
    removeCard: (arg: TRemoveArg) => {
        return instance.delete('/cards/card', {params: {...arg}})
    },
    changeCard: (arg: TChangeArg) => {
        return instance.put<TChangeResponse>('/cards/card', arg).then(res => res.data)
    },
    changeGrade: (arg: TChangeGradeArg) => {
        return instance.put<TChangeGradeResponse>('/cards/card', arg).then(res => res.data)
    }
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
export type TChangeGradeArg = {
    grade: number
    card_id: string
}
export type TChangeResponse = {
    updatedCard: CardsType
}
export type TChangeArg = {
    card: {
        _id: string
        question: string
    }
}
export type TRemoveArg = {
    id: string
}
export type TCreateResponse = {
    newCard: CardsType
}
export type TCreateArg = {
    card: {
        cardsPack_id: string
        question: string
        answer: string
        grade: number
        shots: number
        answerImg: string
        questionImg: string
        questionVideo: string
        answerVideo: string
    }
}
export type TFetchResponse = {
    cards: CardsType[]
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
}
export type  TFetchArgs = {
    cardAnswer: string // не обязательно
    cardQuestion: string // не обязательно
    cardsPack_id: string
    min: number // не обязательно
    max: number // не обязательно
    sortCards: string // не обязательно
    page: number // не обязательно
    pageCount: number
}
export type CardsType = {
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