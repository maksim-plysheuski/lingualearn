import { RootState } from 'app/store'

export const errorSelect = (state: RootState) => state.app.error
export const initializedSelect = (state: RootState) => state.app.isAppInitialized
export const loadingSelect = (state: RootState) => state.app.isLoading