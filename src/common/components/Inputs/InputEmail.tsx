import React, { FC } from 'react'
import { TextField } from '@mui/material'
import { TextFieldProps } from '@mui/material/TextField/TextField'
import { UseFormRegisterReturn } from 'react-hook-form/dist/types/form'

type Props = TextFieldProps & {
  errorMessage: string | undefined
  register: UseFormRegisterReturn
}

export const InputEmail: FC<Props> = ({ errorMessage, register, ...resProps }) => {
  return (
    <TextField
      type={'text'}
      label={'Email'}
      variant='standard'
      error={!!errorMessage}
      helperText={errorMessage}
      {...register}
      {...resProps}
    />
  )
}