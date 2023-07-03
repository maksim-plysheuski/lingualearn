import { useAppSelector } from 'common/hooks'

export const isLoggedInSelect = useAppSelector(state => state.auth.isLoggedIn)
