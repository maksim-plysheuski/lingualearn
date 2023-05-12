import { paths } from 'common/router/path'
import { useAppSelector } from 'common/hooks'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoutes = () => {

  const isAuth = useAppSelector(state => state.auth.isLoggedIn)

  return (
    isAuth ? <Outlet /> : <Navigate to={paths.LOGIN} />
  )
}