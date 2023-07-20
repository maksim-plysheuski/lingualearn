import { instance } from 'common/api/common.api'
import { TProfile } from 'features/profile/profile.api'

export const authApi = {
  authMe: () => {
    return instance.post<TProfile>('auth/me').then(res => res.data)
  },
  register: (arg: TRegisterArg) => {
    return instance.post<TRegisterResponse>('auth/register', arg)
  },
  login: (arg: TLoginArg) => {
    return instance.post<TProfile>('auth/login', arg)
  },
  logout: () => {
    return instance.delete('auth/me')
  },
  forgotPassword: (arg: TForgotArg) => {
    return instance.post<TForgotResponse>('auth/forgot', arg)
  },
  setNewPassword: (arg: TNewPasswordArg) => {
    return instance.post('auth/set-new-password', arg)
  }
}

//Arguments types
type TCommonArgs = {
  email: string
  password: string
}

export type TLoginArg = TCommonArgs & { rememberMe: boolean }
export type TRegisterArg = TCommonArgs
export type TNewPasswordArg = Pick<TCommonArgs, 'password'> & { resetPasswordToken: string }
export type TForgotArg = Pick<TCommonArgs, 'email'> & { from?: string, message: string }

//Response types
export type TForgotResponse = { info: string, error?: string }
export type TRegisterResponse = { addedUser: Omit<TProfile, 'token' | 'tokenDeathTime'> }



