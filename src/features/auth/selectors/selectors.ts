import {RootState} from 'app/store'

export const isLoggedInSelect = (state: RootState) => state.auth.isLoggedIn
export const profileIdSelect = (state: RootState) => state.auth.profile._id
export const authUserNameSelect = (state: RootState) => state.auth.profile.name
export const authUserEmailSelect = (state: RootState) => state.auth.profile.email
