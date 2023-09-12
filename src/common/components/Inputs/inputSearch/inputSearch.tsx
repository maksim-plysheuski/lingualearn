import React, { ChangeEvent, FC, memo } from 'react'
import s from './style.module.scss'
import { searchIconSx } from './style'
import SearchIcon from '@mui/icons-material/Search'

type Props = {
  inputValue: string
  searchCallback: (searchValue: string) => void
}

export const InputSearch: FC<Props> = memo(({ inputValue, searchCallback }) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => searchCallback(e.currentTarget.value)

  return (
    <div className={s.container}>
      <SearchIcon sx={searchIconSx} />
      <input className={s.input} value={inputValue} onChange={onChangeHandler} placeholder={'Input search'} />
    </div>
  )
})

