import { paths } from 'common/router'
import { useAppSelector } from 'common/hooks'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isLoggedInSelect } from 'features/auth/selectors'

export const PrivateLayout = () => {
  const isAuth = useAppSelector(isLoggedInSelect)

  return isAuth ? <Outlet /> : <Navigate to={paths.LOGIN} />
}