import React, { FC } from 'react'
import InputAdornment from '@mui/material/InputAdornment/InputAdornment'
import Search from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField/TextField'
import { SxProps } from '@mui/system'
import { Theme } from '@mui/material/styles'

type  Props = {

}

export const InputSearch: FC<Props> = ({}) => {

  const style: SxProps<Theme> = {

  }
  return (
    <div>
      <TextField variant='outlined'
                 size={'small'}
                 fullWidth
                 placeholder={'Provide your text'}
                 sx={style}
                 InputProps={{
                   startAdornment: (
                     <InputAdornment position='start'>
                       <Search />
                     </InputAdornment>
                   )
                 }}
      />
    </div>
  )
}
