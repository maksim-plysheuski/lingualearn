import { RootState } from 'app/store'

export const selectCards = (state: RootState) => state.cards.cards.cards
export const selectPackName = (state: RootState) => state.cards.cards.packName
export const selectPage = (state: RootState) => state.cards.cards.page
export const selectCardsTotalCount = (state: RootState) => state.cards.cards.cardsTotalCount
export const selectPageCount = (state: RootState) => state.cards.cards.pageCount
export const selectPackUserId = (state: RootState) => state.cards.cards.packUserId
export const selectPrivatePack = (state: RootState) => state.cards.cards.packPrivate
export const selectPackId = (state: RootState) => state.cards.cardsParams.cardsPack_id
export const selectCardQuestion = (state: RootState) => state.cards.cardsParams.cardQuestion
export const selectIsMyCard = (state: RootState) => state.cards.whose

