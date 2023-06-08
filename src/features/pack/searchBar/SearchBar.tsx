import React from 'react'
import { ButtonsShowPacks } from 'features/pack/searchBar/buttonsShowPack/ButtonsShowPacks'
import { CountSearch } from 'features/pack/searchBar/countSearch/CountSearch'
import { ResetButton } from 'features/pack/searchBar/resetButton/resetButton'
import s from './style.module.scss'
import { NameSearch } from 'features/pack/searchBar/nameSearch/NameSearch'

export const SearchBar = () => {
  return (
    <div className={s.container}>
      <NameSearch />
      <ButtonsShowPacks />
      <CountSearch />
      <ResetButton />
    </div>
  )
}

