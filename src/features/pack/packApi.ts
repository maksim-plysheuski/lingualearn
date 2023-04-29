import {instance} from "common/api/common.api";

export const packApi = {
    fetchPack: (args: TFetchPackArgs) => {
        return instance.get<TResponseFetchPack>(`cards/pack?${args}`)
    },
    createPack: (arg:TCreatePackArg) => {
        return instance.post('cards/pack ',arg)
    }
}

export type TCreatePackArg = {
    cardsPack: {
        name: string
        deckCover?: string
        private?: boolean
    }
}
export type TResponseFetchPack = {
    cardPacks: TTack[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}
export type TTack = {
    _id: string
    user_id: string
    name: string
    cardsCount: number
    created: string
    updated: string
}
export type TFetchPackArgs = {
    packName?: string
    min?: number
    max?: number
    sortPacks?: string
    page?: number
    pageCount?: number
    user_id?: string
    block?: boolean
}