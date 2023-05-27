import React, { ChangeEvent, memo } from 'react'
import InputAdornment from '@mui/material/InputAdornment/InputAdornment'
import Search from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField/TextField'
import s from './style.module.scss'

type  Props = {
  width?: string
  callback: (value: string) => void
  nameSearch: string

}

export const InputSearch = memo((props: Props, restProps) => {
  const {
    callback,
    width,
    nameSearch
  } = props

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    callback(e.currentTarget.value)
  }

  return (
    <div className={s.container}>
      <span>Search</span>
      <TextField
        variant={'outlined'}
        size={'small'}
        focused
        fullWidth
        onChange={onChangeHandler}
        value={nameSearch || ''}
        {...restProps}
        sx={{
          position: 'relative',
          width,
          height: '36px',
          backgroundColor: 'white',
          color: 'black',
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
})
