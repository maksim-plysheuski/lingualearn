import * as yup from 'yup'

const emailRegExp = /^\w[\w-.]*@[\w-]+\.[a-z]{2,7}$/i

export const emailSchema = yup.object().shape({
  email: yup.string().matches(emailRegExp, 'Email must be a valid').required()
})
export const passwordSchema = yup.object().shape({
  password: yup.string().min(7).max(20).required()
})


export const loginSchema = emailSchema.shape({
  password: yup.string().min(7).max(20).required(),
  rememberMe: yup.boolean().required()
})

export const registrationSchema = loginSchema.shape({
  passwordConfirmation: yup
    .string()
    .min(7)
    .max(20)
    .oneOf([yup.ref('password')], 'The password must match the new password')
    .required()
})

