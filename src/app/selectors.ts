import { RootState } from 'app/store'

export const selectAppError = (state: RootState) => state.app.error
export const selectIsAppInitialized = (state: RootState) => state.app.isAppInitialized
export const selectIsAppLoading = (state: RootState) => state.app.isLoading