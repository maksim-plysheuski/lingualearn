import { RootState } from 'app/store'

export const pagePackSelect = (state: RootState) => state.sortPackSlice.packParams.page
export const pageCountSelect = (state: RootState) => state.sortPackSlice.packParams.pageCount
export const minPackSelect = (state: RootState) => state.sortPackSlice.packParams.min
export const maxPackSelect = (state: RootState) => state.sortPackSlice.packParams.max
export const user_idSelect = (state: RootState) => state.sortPackSlice.packParams.user_id
export const packNameSelect = (state: RootState) => state.sortPackSlice.packParams.packName