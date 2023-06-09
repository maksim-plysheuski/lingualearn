import { RootState } from 'app/store'

export const namePackParamsSelect = (state: RootState) => state.packs.packParams.packName
export const paramsCardIdSelect = (state: RootState) => state.packs.packParams.user_id
export const minSelect = (state: RootState) => state.packs.packParams.min
export const maxSelect = (state: RootState) => state.packs.packParams.max
export const minCardsCountSelect = (state: RootState) => state.packs.packs.minCardsCount
export const maxCardsCountSelect = (state: RootState) => state.packs.packs.maxCardsCount
export const currentPageSelect = (state: RootState) => state.packs.packs.page
export const packsTotalCountSelect = (state: RootState) => state.packs.packs.cardPacksTotalCount
export const packsPerPageSelect = (state: RootState) => state.packs.packs.pageCount
export const packsSelect = (state: RootState) => state.packs.packs.cardPacks