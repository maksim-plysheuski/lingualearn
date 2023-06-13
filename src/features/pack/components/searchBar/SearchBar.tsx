import React from 'react'
import { ButtonsShowPacks } from 'features/pack/components/searchBar/buttonsShowPack/ButtonsShowPacks'
import { CountSearch } from 'features/pack/components/searchBar/countSearch/CountSearch'
import { ResetButton } from 'features/pack/components/searchBar/resetButton/resetButton'
import s from 'features/pack/components/searchBar/style.module.scss'
import { NameSearch } from 'features/pack/components/searchBar/nameSearch/NameSearch'


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

