import React from 'react'
import { ButtonsShowPacks } from 'features/pack/components/packsList/searchBar/buttonsShowPack/ButtonsShowPacks'
import { CountSearch } from 'features/pack/components/packsList/searchBar/countSearch/CountSearch'
import s from './style.module.scss'
import { NameSearch } from 'features/pack/components/packsList/searchBar/nameSearch/NameSearch'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { SuperButton } from 'common/components'
import { useAppDispatch } from 'common/hooks'
import { setPackParams } from 'features/pack/service/packsParams.slice'


export const SearchBar = () => {
  const dispatch = useAppDispatch()
  const resetParams = { max: 0, min: 0, packName: '', sortPacks: '', user_id: '' }
  const clearSearchFilter = () => dispatch(setPackParams(resetParams))

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

