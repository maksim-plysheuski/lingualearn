import React from 'react'
import { InputSearch } from 'common/components/Inputs/InputSearch'
import { ButtonsShowPacks } from 'features/pack/searchBar/buttonsShowPack/ButtonsShowPacks'

export const SearchBar = () => {
  return (
    <div>
      <InputSearch width={'412px'} />
      <ButtonsShowPacks />
    </div>
  )
}

