import * as yup from 'yup'

const emailRegExp = /^\w[\w-.]*@[\w-]+\.[a-z]{2,7}$/i

export const emailSchema = yup.object().shape({
  email: yup.string()
    .required('Field is required')
    .matches(emailRegExp, 'Email is not valid')
    .max(30, 'Field must have less than 30 characters')
})