import React, { FC, useEffect, useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment/InputAdornment'
import Search from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField/TextField'
import s from './style.module.scss'
import useDebounce from 'common/hooks/useDebounce'


type  Props = {
  width?: string
  callback?: (value: string) => void
  value?: string
}

export const InputSearch: FC<Props> = ({ width, callback, value, ...restProps }) => {

  const [searchValue, setSearchValue] = useState<string>('')
  const debounce = useDebounce<string>(searchValue)

  useEffect(() => {
    callback!(searchValue)
  }, [debounce])

  return (
    <div className={s.container}>
      <span>Search</span>
      <TextField
        variant={'outlined'}
        size={'small'}
        focused
        fullWidth
        onChange={(e) => setSearchValue(e.currentTarget.value)}
        value={searchValue}
        {...restProps}
        sx={{
          position: 'relative',
          width,
          height: '36px',
          backgroundColor: 'white',
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
              <Search sx={{}} />
            </InputAdornment>
          )
        }}
      />
    </div>
  )
}
