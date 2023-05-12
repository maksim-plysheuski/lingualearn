import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://neko-back.herokuapp.com/2.0/',
  withCredentials: true
})


export const forgotPasswordApi = {
  sendEmail: (arg: SendEmailArgType) => {
    return instance.post<ResponseType>('auth/forgot', arg)
  }
}


type SendEmailArgType = {
  email: string
  from?: string
  message: string
}

export type ResponseType = {
  info: string
  error?: string
}