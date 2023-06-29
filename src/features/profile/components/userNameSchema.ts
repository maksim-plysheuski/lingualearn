import * as yup from 'yup'

const userNameRegExp = /^([a-zA-Z0-9]+\s)*[a-zA-Z0-9]+$/

export const userNameSchema = yup.object().shape({
  userName: yup.string()
    .required('Field is required')
    .matches(userNameRegExp, 'Nickname is not valid')
    .min(3, 'Field must have at least 3 characters')
    .max(25, 'Field must have less than 25 characters')
})