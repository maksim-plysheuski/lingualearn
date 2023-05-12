import { createHashRouter } from 'react-router-dom'
import App from 'app/App'
import { Login } from 'features/auth/Login/Login'
import { Register } from 'features/auth/Register/Register'
import { ProfilePage } from 'features/Profile/ProfilePage'
import { PasswordRecoveryPage } from 'features/auth/PasswordRecovery/PasswordRecoveryPage'
import { CreateNewPassword } from 'features/auth/CreateNewPassword/CreateNewPassword'
import React from 'react'
import { paths } from 'common/router/path'
import { PrivateRoutes } from 'common/router/PrivateRoute'

export const router = createHashRouter([
  {
    path: paths.MAIN,
    element: <App />,
    children: [
      {
        path: paths.MAIN,
        element: <PrivateRoutes />,
        children: [
          {
            path: paths.PROFILE,
            element: <ProfilePage />
          }
        ]
      },
      {
        path: paths.LOGIN,
        element: <Login />
      },
      {
        path: paths.REGISTER,
        element: <Register />
      },
      {
        path: paths.FORGOT_PASSWORD,
        element: <PasswordRecoveryPage />
      },
      {
        path: paths.SET_NEW_PASSWORD,
        element: <CreateNewPassword />
      }
    ]
  }
])