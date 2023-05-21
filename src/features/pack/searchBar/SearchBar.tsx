import React from 'react'
import { InputSearch } from 'common/components/Inputs/inputSearch/InputSearch'
import { ButtonsShowPacks } from 'features/pack/searchBar/buttonsShowPack/ButtonsShowPacks'
import { CountSearch } from 'features/pack/searchBar/countSearch/CountSearch'
import { ResetButton } from 'features/pack/searchBar/resetButton/resetButton'
import s from './style.module.scss'

export const SearchBar = () => {
  return (
    <div className={s.container}>
      <InputSearch width={'412px'} />
      <ButtonsShowPacks />
      <CountSearch />
      <ResetButton />
    </div>
  )
}

