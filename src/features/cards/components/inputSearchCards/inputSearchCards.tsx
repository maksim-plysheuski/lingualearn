import React, { ChangeEvent, useState } from 'react'
import s from 'common/components/Inputs/inputSearch/style.module.scss'
import TextField from '@mui/material/TextField/TextField'
import InputAdornment from '@mui/material/InputAdornment/InputAdornment'
import Search from '@mui/icons-material/Search'
import { useSearchCards } from 'features/cards/hooks/useSearchCards'

export const InputSearchCards = () => {
  const { fetchCardsName, cardQuestion } = useSearchCards()

  const [value, setValue] = useState<string | undefined>(cardQuestion)
  const [id, setId] = useState<number>()


  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
    clearTimeout(id)
    const tID = setTimeout(() => {
      fetchCardsName(value!)
    }, 700)
    setId(+tID)
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
        value={value || ''}
        sx={{
          position: 'relative',
          width: '1008px',
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
}

