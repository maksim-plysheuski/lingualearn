import { RootState } from 'app/store'

export const pagePackSelect = (state: RootState) => state.sortPackSlice.packParams.page
export const pageCountSelect = (state: RootState) => state.sortPackSlice.packParams.pageCount