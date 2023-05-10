import * as yup from 'yup'

const emailRegExp = /^\w[\w-.]*@[\w-]+\.[a-z]{2,7}$/i

export const loginSchema = yup.object().shape({
  email: yup.string().matches(emailRegExp, 'Email must be a valid').required(),
  password: yup.string().min(7).max(20).required()
})