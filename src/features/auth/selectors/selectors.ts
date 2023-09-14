import {RootState} from 'app/store'

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn
export const selectUserProfile = (state: RootState) => state.auth.userProfile
export const selectProfileUserId = (state: RootState) => state.auth.userProfile._id
export const selectUserName = (state: RootState) => state.auth.userProfile.name
export const selectUserAva = (state: RootState) => state.auth.userProfile.avatar
