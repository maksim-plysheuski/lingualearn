import { RootState } from 'app/store'

//params
export const selectPackNameParam = (state: RootState) => state.packsParams.packParams.packName
export const selectUserIdParam = (state: RootState) => state.packsParams.packParams.user_id
export const SelectMinPacksParam = (state: RootState) => state.packsParams.packParams.min
export const SelectMaxPacksParam = (state: RootState) => state.packsParams.packParams.max

//packs
export const SelectMinCardsCount = (state: RootState) => state.packs.packs.minCardsCount
export const SelectMaxCardsCount = (state: RootState) => state.packs.packs.maxCardsCount
export const SelectCardPacks = (state: RootState) => state.packs.packs.cardPacks
export const cardPacksTotalCountSelect = (state: RootState) => state.packs.packs.cardPacksTotalCount
export const pageCountSelect = (state: RootState) => state.packs.packs.pageCount
export const pageSelect = (state: RootState) => state.packs.packs.page
export const packsSelect = (state: RootState) => state.packs.packs