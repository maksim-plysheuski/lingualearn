import { instance } from 'common'
import {
  ForgotPasswordArgType,
  ForgotPasswordRespType, LoginArgType,
  NewPasswordArgType, ProfileType,
  RegisterArgType,
  RegisterRespType,
  UpdateProfileArgType, UpdateProfileRespType
} from 'features/auth/auth.api.types'

export const authApi = {
  authMe: () => {
    return instance.post<ProfileType>('auth/me').then(res => res.data)
  },
  register: (arg: RegisterArgType) => {
    return instance.post<RegisterRespType>('auth/register', arg)
  },
  login: (arg: LoginArgType) => {
    return instance.post<ProfileType>('auth/login', arg)
  },
  logout: () => {
    return instance.delete('auth/me')
  },
  forgotPassword: (arg: ForgotPasswordArgType) => {
    return instance.post<ForgotPasswordRespType>('auth/forgot', arg)
  },
  setNewPassword: (arg: NewPasswordArgType) => {
    return instance.post('auth/set-new-password', arg)
  },
  updateUserProfile: (arg: UpdateProfileArgType) => {
    return instance.put<UpdateProfileRespType>('auth/me', arg).then(res => res.data)
  }
}