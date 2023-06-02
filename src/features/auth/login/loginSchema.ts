import * as yup from 'yup'

const emailRegExp = /^\w[\w-.]*@[\w-]+\.[a-z]{2,7}$/i

export const loginSchema = yup.object().shape({
  email: yup.string()
    .required('Field is required')
    .matches(emailRegExp, 'Email is not valid')
    .max(30, 'Field must have less than 30 characters'),
  password: yup.string()
    .required('Field is required')
    .max(20, 'Field must have less than 20 characters'),
  rememberMe: yup.boolean().required()
})