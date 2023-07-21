import React, { ChangeEvent, useState } from 'react'
import s from './style.module.scss'
import SearchIcon from '@mui/icons-material/Search'

type Props = {
  valueName: string | undefined
  searchCallback: (name: string) => void
  disabled?: boolean
}

export const InputSearch = ({ searchCallback, valueName }: Props) => {
  const [value, setValue] = useState<string | undefined>(valueName)
  const [id, setId] = useState<number>()

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setValue(value)
    clearTimeout(id)
    const tID = setTimeout(() => {
      searchCallback(value)
    }, 700)
    setId(+tID)
  }

  return (
    <div className={s.container}>
      <SearchIcon sx={{ height: '20px', width: '20px', color: '#808080', margin: '10px' }} />
      <input className={s.input}
             value={value}
             onChange={onChangeHandler}
             placeholder='Input search'
             id='input-search'
             autoComplete='off'
      />
    </div>
  )
}

