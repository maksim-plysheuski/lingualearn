import React, { FC, useState } from 'react'
import { IconButton, InputAdornment } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import TextField, { TextFieldProps } from '@mui/material/TextField/TextField'
import { UseFormRegisterReturn } from 'react-hook-form/dist/types/form'
import { inputStyle } from 'common/components/Inputs/style'


type Props = TextFieldProps & {
  errorMessage: string | undefined
  register: UseFormRegisterReturn
  idAttribute?: string
}


export const InputPassword: FC<Props> = ({ errorMessage, register, idAttribute, ...restProps }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  return (
    <>
      <label htmlFor='password' style={{ marginTop: '24px', color: "rgba(128, 128, 128, 1)", fontSize: '14px' }}>Password</label>
      <TextField type={showPassword ? 'text' : 'password'}
                 sx={inputStyle}
                 id={idAttribute ? idAttribute : 'password'}
                 autoComplete={'new-password'}
                 error={!!errorMessage}
                 helperText={errorMessage}
                 {...register}
                 {...restProps}
                 InputProps={{
                   endAdornment: (
                     <InputAdornment position='end'>
                       <IconButton
                         sx={{ color: 'white' }}
                         aria-label='toggle password visibility'
                         onClick={() => setShowPassword(state => !state)}
                       >
                         {showPassword ? <Visibility /> : <VisibilityOff />}
                       </IconButton>
                     </InputAdornment>
                   )
                 }}
      />
    </>

  )
}