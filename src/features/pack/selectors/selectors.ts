import { RootState } from 'app/store'

//packs params
export const selectPackNameParam = (state: RootState) => state.packsParams.packParams.packName
export const selectUserIdParam = (state: RootState) => state.packsParams.packParams.user_id
export const SelectMinPacksParam = (state: RootState) => state.packsParams.packParams.min
export const SelectMaxPacksParam = (state: RootState) => state.packsParams.packParams.max
export const SelectPageCountPacksParam = (state: RootState) => state.packsParams.packParams.pageCount