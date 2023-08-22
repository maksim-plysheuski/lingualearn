import { RootState } from 'app/store'

export const selectUserProfile = (state: RootState) => state.profile.userProfileData
export const selectUserId = (state: RootState) => state.profile.userProfileData._id
export const selectUserName = (state: RootState) => state.profile.userProfileData.name
export const selectUserAva = (state: RootState) => state.profile.userProfileData.avatar