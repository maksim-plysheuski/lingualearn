import { RootState } from 'app/store'

//packParams
export const namePackParamsSelect = (state: RootState) => state.packsParams.packParams.packName
export const paramsCardIdSelect = (state: RootState) => state.packsParams.packParams.user_id
export const minSelect = (state: RootState) => state.packsParams.packParams.min
export const maxSelect = (state: RootState) => state.packsParams.packParams.max

//packs
export const minCardsCountSelect = (state: RootState) => state.packs.packs.minCardsCount
export const maxCardsCountSelect = (state: RootState) => state.packs.packs.maxCardsCount
export const cardPacksSelect = (state: RootState) => state.packs.packs.cardPacks
export const cardPacksTotalCountSelect = (state: RootState) => state.packs.packs.cardPacksTotalCount
export const pageCountSelect = (state: RootState) => state.packs.packs.pageCount
export const pageSelect = (state: RootState) => state.packs.packs.page
export const packsSelect = (state: RootState) => state.packs.packs