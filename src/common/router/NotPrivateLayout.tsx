import { routePaths } from 'common/router'
import { useAppSelector } from 'common/hooks'
import { Navigate, Outlet } from 'react-router-dom'
import { selectIsLoggedIn } from 'features/auth/selectors'

export const NotPrivateLayout = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn)

  return isLoggedIn ? <Navigate to={routePaths.PACKS} /> : <Outlet />
}