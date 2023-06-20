import React, { FC } from 'react'
import { TextFieldProps } from '@mui/material/TextField/TextField'
import { UseFormRegisterReturn } from 'react-hook-form/dist/types/form'
import { CustomInput } from 'common/components/Inputs/InputText'


type Props = TextFieldProps & {
  errorMessage: string | undefined
  register: UseFormRegisterReturn
}

export const InputEmail: FC<Props> = ({ errorMessage, register, ...resProps }) => {
  return (
      <CustomInput type={'text'}
                   id="custom-input"
                   label={'Email'}
                   InputLabelProps={{ sx: { color: "white" }}}
                   error={!!errorMessage}
                   helperText={errorMessage}
                   {...register}
                   {...resProps}/>
  )
}