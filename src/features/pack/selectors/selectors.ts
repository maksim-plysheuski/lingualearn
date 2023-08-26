import { RootState } from 'app/store'

//packs params
export const selectPackNameParam = (state: RootState) => state.packsParams.packParams.packName
export const selectUserIdParam = (state: RootState) => state.packsParams.packParams.user_id
export const selectMinPacksParam = (state: RootState) => state.packsParams.packParams.min
export const selectMaxPacksParam = (state: RootState) => state.packsParams.packParams.max
export const selectPageCountPacksParam = (state: RootState) => state.packsParams.packParams.pageCount
export const selectIsMyPack = (state: RootState) => state.packsParams.isMyPack