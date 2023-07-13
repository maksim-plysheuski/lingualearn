import { paths } from 'common/router'
import { useAppSelector } from 'common/hooks'
import { Navigate, Outlet } from 'react-router-dom'
import { isLoggedInSelect } from 'features/auth/selectors'

export const NotPrivateLayout = () => {
  const isAuth = useAppSelector(isLoggedInSelect)

  return isAuth ? <Navigate to={paths.PACKS} /> : <Outlet />
}