import axios from 'axios'

export const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development" ? "http://localhost:7542/2.0/" : "https://neko-back.herokuapp.com/2.0/",
  withCredentials: true
});


export const forgotPasswordApi = {
  sendEmail: (arg: SendEmailArgType) => {
    return axios.post<ResponseType>('https://neko-back.herokuapp.com/2.0/auth/forgot/auth/forgot', arg,  { withCredentials: true })
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