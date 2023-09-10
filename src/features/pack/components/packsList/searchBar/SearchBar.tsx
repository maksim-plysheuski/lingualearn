import React from 'react'
import { ButtonsShowPacks } from './buttonsShowPack/ButtonsShowPacks'
import { CountSearch } from './countSearch/CountSearch'
import s from './style.module.scss'
import { NameSearch } from './nameSearch/NameSearch'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { SuperButton } from 'common/components'
import { useSearchNamePacks } from 'features/pack/hook/useSearchNamePacks'


export const SearchBar = () => {
  const { clearSearchFilter } = useSearchNamePacks()

  return (
    <div className={s.container}>
      <NameSearch />
      <ButtonsShowPacks />
      <CountSearch />
      <SuperButton title={'Clear Filter'}
                   width={'144'}
                   isGrayColor={true}
                   onClick={clearSearchFilter}
                   icon={<DeleteOutlineIcon />} />
    </div>
  )
}

