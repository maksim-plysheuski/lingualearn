import { instance } from "common/api/common.api";

export const authApi = {
  register: (arg: ArgRegisterType) => {
    return instance.post<RegisterResponseType>("auth/register", arg);
  },
  login: (arg: ArgLoginType) => {
    return instance.post<ProfileType>("auth/login", arg);
  }
};

// Types
export type ArgLoginType = {
  email: string
  password: string
  rememberMe: boolean
}

export type ArgRegisterType = Omit<ArgLoginType, "rememberMe">

export type RegisterResponseType = {
  addedUser: Omit<ProfileType, "token" | "tokenDeathTime">
}

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
  token: string;
  tokenDeathTime: number;
}
