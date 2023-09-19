import { routePaths } from 'common/router'
import { useAppSelector } from 'common/hooks'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { selectIsLoggedIn } from 'features/auth/selectors'

export const PrivateLayout = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn)

  return isLoggedIn ? <Outlet /> : <Navigate to={routePaths.LOGIN} />
}