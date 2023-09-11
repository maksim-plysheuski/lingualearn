import React, { ChangeEvent, memo } from 'react'
import s from './style.module.scss'
import { searchIconSx } from './style'
import SearchIcon from '@mui/icons-material/Search'


type Props = {
  valueName: string
  searchNameCallback: (name: string) => void
}

export const InputSearch = memo((props: Props) => {
  const { searchNameCallback, valueName } = props
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => searchNameCallback(e.currentTarget.value)

  return (
    <div className={s.container}>
      <SearchIcon sx={searchIconSx} />
      <input className={s.input} value={valueName} onChange={onChangeHandler} placeholder={'Input search'} />
    </div>
  )
})

