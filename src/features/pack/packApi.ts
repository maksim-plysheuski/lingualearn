import { instance } from 'common/api/common.api'

export const packApi = {
  getPacks: (args: TGetPacksArg = {}) => {
    return instance.get<TPacksResponse>('cards/pack', { params: { ...args } })
  },
  createPack: (cardsPack: TCreatePackArg) => {
    return instance.post<TCreatePackResponse>('cards/pack ', { cardsPack }).then(res => res.data)
  },
  deletePack: (arg: TDeletePackArg) => {
    return instance.delete<TDeletePackResponse>(`/cards/pack?id=${arg.id}`)
  },
  updatePack: (cardsPack: TUpdatePackArg) => {
    return instance.put<TUpdatePackResponse>('/cards/pack', { cardsPack }).then(res => res.data)
  }
}


export type TUpdatePackResponse = {
  updatedCardsPack: TPack
}

export type TUpdatePackArg = {
  _id: string
  name: string
  private?: boolean
  deckCover?: string
}

export type  TDeletePackArg = {
  id: string
}

export type TDeletePackResponse = {
  deletedCardsPack: TPack,
  token: string,
  tokenDeathTime: number
}

export type TCreatePackResponse = {
  newCardsPack: TPack,
  token: string,
  tokenDeathTime: number
}
export type TCreatePackArg = {
  name: string
  deckCover?: string
  private?: boolean
}
export type TPacksResponse = {
  cardPacks: TPack[]
  cardPacksTotalCount: number
  maxCardsCount: number
  minCardsCount: number
  page: number
  pageCount: number
}
export type TPack = {
  _id: string,
  user_id: string,
  user_name: string,
  name: string,
  private: boolean,
  path: string,
  grade: number,
  shots: number,
  cardsCount: number,
  type: string,
  deckCover: string,
  rating: number,
  more_id: string,
  created: string,
  updated: string,
  __v: number
}


export type TGetPacksArg = {
  packName?: string
  min?: number
  max?: number
  sortPacks?: string
  page?: number
  pageCount?: number
  user_id?: string
  block?: boolean
}

export type PackArgs = {
  packName?: string
  min?: string
  max?: string
  // sortPacks: string
  // page: number
  // pageCount: number
  user_id?: string
  // block: boolean
}

