import * as yup from 'yup'

const passwordRegExp = /^(?!.* )/

export const passwordSchema = yup.object().shape({
  password: yup.string()
    .required('Field is required')
    .matches(passwordRegExp, 'Password must not have spaces')
    .min(8, 'Password must have at least 8 characters')
    .max(20, 'Password must have less than 20 characters')
})