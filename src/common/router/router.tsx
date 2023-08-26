import { createHashRouter } from 'react-router-dom'
import App from 'app/components/App'
import { ProfilePage } from 'common/components'
import { paths } from 'common/router/path'
import { PacksList } from 'features/pack/components/packsList/PacksList'
import { CardsPage } from 'features/cards/components/cardsPage/CardsPage'
import { LearnPage } from 'features/learn'
import { NotPrivateLayout } from './NotPrivateRoute'
import { PrivateLayout } from './PrivateRoute'
import { Login } from 'features/auth/components'
import { Register } from 'features/auth/components'
import { ForgotPasswordPage } from 'features/auth/components'
import { CheckEmailPage } from 'features/auth/components'
import { ChangePasswordPage } from 'features/auth/components'
import { PageNotFound } from 'common/components'

export const router = createHashRouter([
  {
    path: paths.MAIN,
    element: <App />,
    errorElement: <PageNotFound />,
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
          },
          {
            path: paths.LEARN,
            element: <LearnPage />
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
            element: <ChangePasswordPage />
          }
        ]
      }
    ]
  }
])
