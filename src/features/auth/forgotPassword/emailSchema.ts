import * as yup from 'yup'

const emailRegExp = /^\w[\w-.]*@[\w-]+\.[a-z]{2,7}$/i

export const emailSchema = yup.object().shape({
  email: yup.string().matches(emailRegExp, 'Email must be a valid').required()
})