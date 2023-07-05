import React from 'react'
import { ButtonsShowPacks } from 'features/pack/components/searchBar/buttonsShowPack/ButtonsShowPacks'
import { CountSearch } from 'features/pack/components/searchBar/countSearch/CountSearch'
import s from 'features/pack/components/searchBar/style.module.scss'
import { NameSearch } from 'features/pack/components/searchBar/nameSearch/NameSearch'
import { SuperButton } from 'common/components/superButton/SuperButton'
import { useSearchPacks } from 'features/pack/hook/useSearchPacks'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'


export const SearchBar = () => {
  const { resetSearchParams } = useSearchPacks()

  return (
    <div className={s.container}>
      <NameSearch />
      <ButtonsShowPacks />
      <CountSearch />
      {/*<ResetButton />*/}
      <SuperButton title={'Clear Filter'}
                   width={'144'}
                   isGrayColor={true}
                   onClickCallback={resetSearchParams}
                   icon={<DeleteOutlineIcon />} />
    </div>
  )
}

