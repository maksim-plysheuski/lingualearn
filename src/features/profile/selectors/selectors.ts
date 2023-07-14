import { RootState } from 'app/store'

export const selectProfile = (state: RootState) => state.profile.profile
export const selectUserName = (state: RootState) => state.profile.profile?.name
export const selectUserEmail = (state: RootState) => state.profile.profile?.email
export const selectUserAva = (state: RootState) => state.profile.profile?.avatar