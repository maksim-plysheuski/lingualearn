import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { path } from 'common/router/path'
import { useAppSelector } from 'common/hooks'
import { isLoggedInSelect } from 'features/profile'

export const NotPrivateLayout = () => {
  const isLoggedIn = useAppSelector(isLoggedInSelect)

  return isLoggedIn ? <Navigate to={path.PROFILE} /> : <Outlet />
}