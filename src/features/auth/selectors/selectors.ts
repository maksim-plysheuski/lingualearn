import {RootState} from 'app/store'

export const isLoggedInSelect = (state: RootState) => state.auth.isLoggedIn
export const profileIdSelect = (state: RootState) => state.auth.profile._id
