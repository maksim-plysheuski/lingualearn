import { RootState } from 'app/store'

export const namePackParamsSelect = (state: RootState) => state.packs.packParams.packName
export const paramsCardIdSelect = (state: RootState) => state.packs.packParams.user_id
export const minSelect = (state: RootState) => state.packs.packParams.min
export const maxSelect = (state: RootState) => state.packs.packParams.max
export const minCardsCountSelect = (state: RootState) => state.packs.packs.minCardsCount
export const maxCardsCountSelect = (state: RootState) => state.packs.packs.maxCardsCount