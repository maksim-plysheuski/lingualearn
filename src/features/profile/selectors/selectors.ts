import { RootState } from 'app/store'

export const selectUserProfile = (state: RootState) => state.profile.profile
export const selectUserId = (state: RootState) => state.profile.profile?._id
export const selectUserName = (state: RootState) => state.profile.profile?.name
export const selectUserAva = (state: RootState) => state.profile.profile?.avatar