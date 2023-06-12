import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { packNameSchema } from 'features/modals/packsModals/packNameSchema'
import { useCallback } from 'react'
import * as yup from 'yup'

export type InputsType = yup.InferType<typeof packNameSchema>

export const useFormModals = (onSubmit: (data: InputsType) => void) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<InputsType>({
    mode: 'onTouched',
    resolver: yupResolver(packNameSchema)
  })

  const onSubmitHandler = useCallback((data: InputsType) => onSubmit(data), [onSubmit])

  return { register, handleSubmit, onSubmitHandler, reset, errors }
}