import React from 'react'
import { ButtonsShowPacks } from 'features/pack/components/packsList/searchBar/buttonsShowPack/ButtonsShowPacks'
import { CountSearch } from 'features/pack/components/packsList/searchBar/countSearch/CountSearch'
import { ResetButton } from 'features/pack/components/packsList/searchBar/resetButton/resetButton'
import s from 'features/pack/components/packsList/searchBar/style.module.scss'
import { NameSearch } from 'features/pack/components/packsList/searchBar/nameSearch/NameSearch'


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

