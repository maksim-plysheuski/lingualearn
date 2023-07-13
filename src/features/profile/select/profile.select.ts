import { RootState } from 'app/store'

export const isLoggedInSelect = (state: RootState) => state.authProfile.isLoggedIn
export const profileSelect = (state: RootState) => state.authProfile.profile
export const userIdSelect = (state: RootState) => state.authProfile.profile._id
export const userNameSelect = (state: RootState) => state.authProfile.profile.name
export const userEmailSelect = (state: RootState) => state.authProfile.profile.email
export const userAvatarSelect = (state: RootState) => state.authProfile.profile.avatar