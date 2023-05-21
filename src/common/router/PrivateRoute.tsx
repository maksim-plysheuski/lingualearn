import { paths } from 'common/router/path'
import { useAppSelector } from 'common/hooks'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoutes = () => {

  const isAuth = useAppSelector(state => state.auth.isLoggedIn)
  const isAppInitialized = useAppSelector(state => state.app.isAppInitialized)
  console.log('isAuth: ',isAuth)
  console.log('isAppInitialized: ',isAppInitialized)
  return (
    isAuth ? <Outlet /> : <Navigate to={paths.LOGIN} />
  )
}