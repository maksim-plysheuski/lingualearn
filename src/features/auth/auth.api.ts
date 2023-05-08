import {instance} from "common/api/common.api";

export const authApi = {
    authMe: () => {
        return instance.post<ProfileType>('auth/me').then(res => res.data)
    },
    register: (arg: ArgRegisterType) => {
        return instance.post<RegisterResponseType>("auth/register", arg);
    },
    login: (arg: ArgLoginType) => {
        return instance.post<ProfileType>("auth/login", arg);
    },
    changeUser: (arg: TChangeUser) => {
        return instance.put<TUpdatedUser>('auth/me', arg).then(res => res.data)
    },
    logout: () => {
        return instance.delete('auth/me')
    },
    forgotPassword: (arg: TForgot) => {
        return instance.post('auth/forgot', arg)
    },
    newPassword: (arg: TNewPassword) => {
        return instance.post('auth/forgot', arg)
    },


};

// Types
export type TNewPassword = {
    password: string
    resetPasswordToken: string
}
export type TForgot = {
    email: string
    from?: string
    message: string
}

export type TUpdatedUser = {
    "updatedUser": ProfileType & {
        avatar: string | null
    },
    "token": string,
    "tokenDeathTime": number
}
export type TChangeUser = {
    name?: string
    avatar?: string
}

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
    avatar: string
    error?: string
}

