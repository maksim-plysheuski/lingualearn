type CardPacksT = {
  _id: string
  user_id: string
  user_name: string
  name: string
  private: boolean
  path: string
  grade: number
  shots: number
  cardsCount: number
  deckCover: string
  type: string
  rating: number
  more_id: string
  created: string
  updated: string
  __v: number
}
//fetch
export type FetchPackT = {
  packName?: string
  min?: number
  max?: number
  sortPacks?: string
  page?: number
  pageCount?: number
  user_id?: string
  block?: boolean
}
export type ResponsePack = {
  cardPacks: CardPacksT[]
  page: number
  pageCount: number
  cardPacksTotalCount: number
  minCardsCount: number
  maxCardsCount: number
  token: string
  tokenDeathTime: number
}
//add
export type AddPackT = {
  name: string
  deckCover?: string
  private?: boolean
}
export type ResponseAddPack = {
  newCardsPack: CardPacksT
}