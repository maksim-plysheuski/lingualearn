import * as yup from 'yup'

const emailRegExp = /^\w[\w-.]*@[\w-]+\.[a-z]{2,7}$/i
const passwordRegExp = /^(?!.* )/

export const registerSchema = yup.object().shape({
  email: yup.string()
    .required('Field is required')
    .matches(emailRegExp, 'Email is not valid')
    .max(30, 'Field must have less than 30 characters'),
  password: yup.string()
    .required('Field is required')
    .matches(passwordRegExp, 'Password must not have spaces')
    .min(8, 'Password must have at least 8 characters')
    .max(20, 'Password must have less than 20 characters'),
  passConfirmation: yup
    .string()
    .required('Field is required')
    .matches(passwordRegExp, 'Password must not have spaces')
    .min(8)
    .max(20)
    .oneOf([yup.ref('password')], 'The passwords are not match')
})