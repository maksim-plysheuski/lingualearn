import React, { FC } from 'react'
import InputAdornment from '@mui/material/InputAdornment/InputAdornment'
import Search from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField/TextField'
import InputLabel from '@mui/material/InputLabel/InputLabel'


type  Props = {
  width?: string
}

export const InputSearch: FC<Props> = ({ width, ...restProps }) => {
  return (
    <>
      <InputLabel sx={{
        color: 'black',
        fontSize: '18px',
        lineHeight: ' 17px',
        marginBottom: '8px',
        fontWeight: 500
      }} shrink htmlFor='bootstrap-input'>
        Bootstrap
      </InputLabel>
      <TextField
        id='bootstrap-input'
        variant={'outlined'}
        size={'small'}
        focused
        fullWidth
        {...restProps}
        sx={{
          position: 'relative',
          width,
          height: '36px',
          backgroundColor: '#fff',
          opacity: '0.5',
          color: '#D9D9D9',
          border: '1px solid #D9D9D9',
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none'
          },
          borderRadius: '2px',
          fontSize: '14px'
        }}
        placeholder={'Provide your text'}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Search sx={{

              }} />
            </InputAdornment>
          )
        }}
      />
    </>
  )
}
