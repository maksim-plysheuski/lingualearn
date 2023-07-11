import React from 'react'
import { ButtonsShowPacks } from './buttonsShowPack/ButtonsShowPacks'
import { CountSearch } from './countSearch/CountSearch'
import s from './style.module.scss'
import { NameSearch } from './nameSearch/NameSearch'
import { useSearchPacks } from 'features/pack/hook/useSearchPacks'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { SuperButton } from 'common/components'


export const SearchBar = () => {
  const { resetSearchParams } = useSearchPacks()

  return (
    <div className={s.container}>
      <NameSearch />
      <ButtonsShowPacks />
      <CountSearch />
      <SuperButton title={'Clear Filter'}
                   width={'144'}
                   isGrayColor={true}
                   onClick={resetSearchParams}
                   icon={<DeleteOutlineIcon />} />
    </div>
  )
}

