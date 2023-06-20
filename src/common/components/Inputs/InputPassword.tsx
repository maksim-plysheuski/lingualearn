import React, { FC, useState } from 'react'
import { IconButton, InputAdornment } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { TextFieldProps } from '@mui/material/TextField/TextField'
import { CustomInput } from 'common/components/Inputs/InputText'


type Props = TextFieldProps & {
  errorMessage: string | undefined
  register: any
}

export const InputPassword: FC<Props> = ({ errorMessage, register, ...restProps }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  return (
    <div>
      <CustomInput id="custom-input"
                   type={showPassword ? 'text' : 'password'}
                   label={'Password'}
                   InputLabelProps={{ sx: { color: "white" }}}
                   error={!!errorMessage}
                   helperText={errorMessage}
                   {...register}
                   {...restProps}
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

      />
    </div>

  )
}