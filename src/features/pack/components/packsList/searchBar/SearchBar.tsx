import React from 'react'
import { ButtonsShowPacks } from './buttonsShowPack/ButtonsShowPacks'
import { CountSearch } from './countSearch/CountSearch'
import s from './style.module.scss'
import { NameSearch } from './nameSearch/NameSearch'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { SuperButton } from 'common/components'
import { useAppDispatch } from 'common/hooks'
import { setPackParams } from 'features/pack/service/packs.params.slice'


export const SearchBar = () => {
  const dispatch = useAppDispatch()
  const params = { max: 0, min: 0, packName: '', sortPacks: '', user_id: '' }
  const clearSearchFilter = () => dispatch(setPackParams(params))

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

