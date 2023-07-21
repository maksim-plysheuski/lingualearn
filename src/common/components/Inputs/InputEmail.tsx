import React, { FC } from 'react'
import TextField, { TextFieldProps } from '@mui/material/TextField/TextField'
import { UseFormRegisterReturn } from 'react-hook-form/dist/types/form'
import { inputStyle } from 'common/components/Inputs/style'

type Props = TextFieldProps & {
  errorMessage: string | undefined
  register: UseFormRegisterReturn
}

export const InputEmail: FC<Props> = ({ errorMessage, register, ...resProps }) => {
  return (
    <>
      <label htmlFor='email' style={{ marginTop: '24px', color: "rgba(128, 128, 128, 1)", fontSize: '14px'
      }}>Email</label>
      <TextField type={'text'}
                 id={'email'}
                 autoComplete={'email'}
                 sx={inputStyle}
                 error={!!errorMessage}
                 helperText={errorMessage}
                 {...register}
                 {...resProps}
      />
    </>

  )
}