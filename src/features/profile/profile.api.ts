import { instance } from 'common/api/common.api'
import { ProfileType } from 'features/auth/auth.api'

export const profileApi = {
  changeUserProfile: (arg: TChangeUser) => {
    return instance.put<TUpdatedUser>('auth/me', arg).then(res => res.data.updatedUser)
  }
}

// Types
export type TUpdatedUser = {
  updatedUser: ProfileType
  token: string
  tokenDeathTime: number
}
export type TChangeUser = {
  name?: string
  avatar?: string
}

