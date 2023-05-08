import React, { FC, useState } from 'react'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { TextFieldProps } from '@mui/material/TextField/TextField'


type Props = TextFieldProps & {
  errorMessage: string | undefined
  register: any
}

export const InputPassword: FC<Props> = ({ errorMessage, register, className, ...restProps }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  return (
    <TextField type={showPassword ? 'text' : 'password'}
               label={'Password'}
               variant='standard'
               error={!!errorMessage}
               helperText={errorMessage}
               InputProps={{
                 endAdornment: (
                   <InputAdornment position='end'>
                     <IconButton
                       aria-label='toggle password visibility'
                       onClick={() => setShowPassword(state => !state)}
                     >
                       {showPassword ? <Visibility /> : <VisibilityOff />}
                     </IconButton>
                   </InputAdornment>
                 )
               }}
               {...register}
               {...restProps}
    />
  )
}