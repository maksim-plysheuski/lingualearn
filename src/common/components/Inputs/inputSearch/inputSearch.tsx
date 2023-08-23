import React, { ChangeEvent, memo, useEffect, useState } from 'react'
import s from './style.module.scss'
import SearchIcon from '@mui/icons-material/Search'

type Props = {
  valueName: string | undefined
  searchCallback: (name: string) => void
  disabled?: boolean
}

export const InputSearch = memo((props: Props) => {
  const { searchCallback, valueName } = props
  const [value, setValue] = useState<string>('')

  useEffect(() => {
    if (!valueName && value) setValue('')
  }, [valueName])

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setValue(value)
    searchCallback(value)
  }

  return (
    <div className={s.container}>
      <SearchIcon sx={{ height: '20px', width: '20px', color: '#808080', margin: '10px' }} />
      <input className={s.input} value={value} onChange={onChangeHandler} placeholder={'Input search'} />
    </div>
  )
})

