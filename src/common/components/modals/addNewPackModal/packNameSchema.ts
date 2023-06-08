import * as yup from 'yup'

export const packNameSchema = yup.object().shape({
  packName: yup.string()
    .required('Field is required')
    .min(3, 'Field must have at least 3 characters')
    .max(30, 'Field must have less than 30 characters'),
  privatePack: yup.boolean().required()
})