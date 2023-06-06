import * as yup from 'yup'

export const packNameSchema = yup.object().shape({
  packName: yup.string()
    .required('Field is required')
    .max(30, 'Field must have less than 30 characters'),
  privatePack: yup.boolean().required()
})