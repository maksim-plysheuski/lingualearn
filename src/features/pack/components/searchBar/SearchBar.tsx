import React from 'react'
import { ButtonsShowPacks } from 'features/pack/components/searchBar/buttonsShowPack/ButtonsShowPacks'
import { CountSearch } from 'features/pack/components/searchBar/countSearch/CountSearch'
import { ResetButton } from 'features/pack/components/searchBar/resetButton/resetButton'
import s from 'features/pack/components/searchBar/style.module.scss'
import { NameSearch } from 'features/pack/components/searchBar/nameSearch/NameSearch'
import { UniversalButton } from 'common/components/universalButton/UniversalButton'
import { useSearchPaks } from 'features/pack/hook/useSearchPaks'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'


export const SearchBar = () => {
  const { resetSearchParams } = useSearchPaks()

  return (
    <div className={s.container}>
      <NameSearch />
      <ButtonsShowPacks />
      <CountSearch />
      {/*<ResetButton />*/}
      <UniversalButton title={'Clear Filter'}
                       width={'144'}
                       isGrayColor={true}
                       onClickCallback={resetSearchParams}
                       icon={<DeleteOutlineIcon />} />
    </div>
  )
}

