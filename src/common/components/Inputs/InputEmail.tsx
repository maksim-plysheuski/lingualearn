import React, { FC } from 'react'
import TextField, { TextFieldProps } from '@mui/material/TextField/TextField'
import { UseFormRegisterReturn } from 'react-hook-form/dist/types/form'
import { inputStyle } from 'common/components/Inputs/InputText'

type Props = TextFieldProps & {
  errorMessage: string | undefined
  register: UseFormRegisterReturn
}

export const InputEmail: FC<Props> = ({ errorMessage, register, ...resProps }) => {
  return (
    <>
      <span style={{ marginTop: '24px', color: "rgba(128, 128, 128, 1)", fontSize: '14px'
      }}>Email</span>
      <TextField type={'text'}
                 sx={inputStyle}
                 error={!!errorMessage}
                 helperText={errorMessage}
                 {...register}
                 {...resProps}
      />
    </>

  )
}