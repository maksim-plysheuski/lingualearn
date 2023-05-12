import * as yup from 'yup'

export const passwordSchema = yup.object().shape({
  password: yup.string().min(7).max(20).required()
})