import { path } from 'common/router'
import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from 'common/hooks'
import { isLoggedInSelect } from 'features/profile'

export const PrivateLayout = () => {
  const isLoggedIn = useAppSelector(isLoggedInSelect)

  return isLoggedIn ? <Outlet /> : <Navigate to={path.LOGIN} />
}