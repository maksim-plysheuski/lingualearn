import { createHashRouter } from 'react-router-dom'
import App from 'app/App'
import { Login } from 'features/auth/login/Login'
import { Register } from 'features/auth/register/Register'
import { ProfilePage } from 'features/profile/ProfilePage'
import { ForgotPasswordPage } from 'features/auth/forgotPassword/ForgotPasswordPage'
import { SetNewPasswordPage } from 'features/auth/setNewPassword/SetNewPasswordPage'
import React from 'react'
import { paths } from 'common/router/path'
import { PrivateLayout } from 'common/router/PrivateRoute'
import { PacksList } from 'features/pack/packsList/PacksList'
import { CheckEmailPage } from 'features/auth/checkEmail/CheckEmailPage'
import { NotPrivateLayout } from 'common/router/NotPrivateRoute'
import { CardsPage } from 'features/cards/cardsPage/CardsPage'
import { PasswordChangeSuccess } from 'features/auth/setNewPassword/passwordChanged/PasswordChangeSuccess'

export const router = createHashRouter([
  {
    path: paths.MAIN,
    element: <App />,
    children: [
      {
        path: paths.MAIN,
        element: <PrivateLayout />,
        children: [
          {
            path: paths.PACKS,
            element: <PacksList />
          },
          {
            path: paths.CARDS,
            element: <CardsPage />
          },
          {
            path: paths.PROFILE,
            element: <ProfilePage />
          }
        ]
      },
      {
        path: paths.AUTH,
        element: <NotPrivateLayout />,
        children: [
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
            element: <ForgotPasswordPage />
          },
          {
            path: paths.CHECK_EMAIL,
            element: <CheckEmailPage />
          },
          {
            path: paths.SET_NEW_PASSWORD,
            element: <SetNewPasswordPage />
          },
          {
            path: paths.PASSWORD_CHANGED,
            element: <PasswordChangeSuccess />
          }
        ]
      }
    ]
  }
])
