import { instance } from 'common/api/common.api'

export const profileApi = {
  updateUserProfile: (arg: TUpdateUserArg) => {
    return instance.put<TUpdateUserResponse>('auth/me', arg).then(res => res.data)
  }
}

export type TProfile = {
  _id: string;
  email: string;
  rememberMe: boolean;
  isAdmin: boolean;
  name: string;
  verified: boolean;
  publicCardPacksCount: number;
  created: string;
  updated: string;
  __v: number;
  avatar?: string
  error?: string
  token: string;
  tokenDeathTime: number;
}

export type TUpdateUserArg =  { name?: string, avatar?: string }
export type TUpdateUserResponse = Pick<TProfile, 'token' | 'tokenDeathTime'> & { updatedUser: TProfile }




