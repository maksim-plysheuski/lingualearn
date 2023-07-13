import { createHashRouter } from 'react-router-dom'
import App from 'app/App'
import { Login } from 'features/profile/components/auth/login/Login'
import { Register } from 'features/profile/components/auth/register/Register'
import { ProfilePage } from 'features/profile/components/profile/components/ProfilePage'
import { ForgotPasswordPage } from 'features/profile/components/auth/forgotPassword/ForgotPasswordPage'
import { ChangePasswordPage } from 'features/profile/components/auth/changePassword/ChangePasswordPage'
import { PrivateLayout } from 'common/router/PrivateRoute'
import { PacksList } from 'features/pack/components/packsList/PacksList'
import { CheckEmailPage } from 'features/profile/components/auth/checkEmail/CheckEmailPage'
import { NotPrivateLayout } from 'common/router/NotPrivateRoute'
import { CardsPage } from 'features/cards/components/cardsPage/cardsPage'
import { PasswordChangeSuccess } from 'features/profile/components/auth/changePassword/passwordChanged/PasswordChangeSuccess'
import { LearnPageContainer } from 'features/learn/LearnPageContainer'
import { path } from './path'

export const router = createHashRouter([
  {
    path: path.MAIN,
    element: <App />,
    children: [
      {
        element: <PrivateLayout />,
        children: [
          { index: true, element: <ProfilePage /> },
          { path: path.PROFILE, element: <ProfilePage /> },
          { path: path.PACKS, element: <PacksList /> },
          { path: path.CARDS, element: <CardsPage /> },
          { path: path.LEARN, element: <LearnPageContainer /> }
        ]
      },
      {
        element: <NotPrivateLayout />,
        children: [
          { path: path.LOGIN, element: <Login /> },
          { path: path.REGISTER, element: <Register /> },
          { path: path.FORGOT_PASSWORD, element: <ForgotPasswordPage /> },
          { path: path.CHECK_EMAIL, element: <CheckEmailPage /> },
          { path: path.SET_NEW_PASSWORD, element: <ChangePasswordPage /> },
          { path: path.PASSWORD_CHANGED, element: <PasswordChangeSuccess /> }
        ]
      }

    ]
  }
])
