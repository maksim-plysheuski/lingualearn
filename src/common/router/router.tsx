import { createHashRouter } from 'react-router-dom'
import App from 'app/components/App'
import { ProfilePage } from 'common/components'
import { routePaths } from 'common/router/routePaths'
import { PacksList } from 'features/pack/components/packsList/PacksList'
import { CardsPage } from 'features/cards/components/cardsPage/CardsPage'
import { LearnPage } from 'features/learn'
import { NotPrivateLayout } from 'common/router/NotPrivateLayout'
import { PrivateLayout } from 'common/router/PrivateLayout'
import { Login } from 'features/auth/components'
import { Register } from 'features/auth/components'
import { ForgotPasswordPage } from 'features/auth/components'
import { CheckEmailPage } from 'features/auth/components'
import { ChangePasswordPage } from 'features/auth/components'
import { PageNotFound } from 'common/components'

export const router = createHashRouter([
  {
    path: routePaths.MAIN,
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      { path: routePaths.MAIN,
        element: <PrivateLayout />,
        children: [
          { index: true, path: routePaths.PROFILE, element: <ProfilePage /> },
          { path: routePaths.PACKS, element: <PacksList /> },
          { path: routePaths.CARDS, element: <CardsPage /> },
          { path: routePaths.LEARN, element: <LearnPage /> }
        ]
      },
      { path: routePaths.MAIN,
        element: <NotPrivateLayout />,
        children: [
          { path: routePaths.LOGIN, element: <Login /> },
          { path: routePaths.REGISTER, element: <Register /> },
          { path: routePaths.FORGOT_PASSWORD, element: <ForgotPasswordPage /> },
          { path: routePaths.CHECK_EMAIL, element: <CheckEmailPage /> },
          { path: routePaths.SET_NEW_PASSWORD, element: <ChangePasswordPage /> }
        ]
      }
    ]
  }
])
