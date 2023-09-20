//Arguments types
type CommonArgType = {
  email: string
  password: string
}

export type LoginArgType = CommonArgType & { rememberMe: boolean }
export type RegisterArgType = CommonArgType
export type NewPasswordArgType = Pick<CommonArgType, 'password'> & { resetPasswordToken: string }
export type ForgotPasswordArgType = Pick<CommonArgType, 'email'> & { from?: string, message: string }
export type UpdateProfileArgType =  { name?: string, avatar?: string }

//Response types
export type ProfileType = {
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

export type ForgotPasswordRespType = { info: string, error?: string }
export type RegisterRespType = { addedUser: Omit<ProfileType, 'token' | 'tokenDeathTime'> }
export type UpdateProfileRespType = Pick<ProfileType, 'token' | 'tokenDeathTime'> & { updatedUser: ProfileType }

