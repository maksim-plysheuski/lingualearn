import { RootState } from 'app/store'

export const selectProfile = (state: RootState) => state.profile?.profile
export const selectUserName = (state: RootState) => state.profile.profile?.name