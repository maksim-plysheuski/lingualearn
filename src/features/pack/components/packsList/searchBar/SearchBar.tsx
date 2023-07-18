import React from 'react'
import { ButtonsShowPacks } from 'features/pack/components/packsList/searchBar/buttonsShowPack/ButtonsShowPacks'
import { CountSearch } from 'features/pack/components/packsList/searchBar/countSearch/CountSearch'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import s from 'features/pack/components/packsList/searchBar/style.module.scss'
import { NameSearch } from 'features/pack/components/packsList/searchBar/nameSearch/NameSearch'
import { useAppDispatch } from 'common/hooks'
import { setPackParams } from 'features/pack/service/sortPackSlice'
import { SuperButton } from 'common/components/superButton/SuperButton'


export const SearchBar = () => {
  const dispatch = useAppDispatch()
  const resetSearchParams = () => {
    const reset = {
      min: undefined,
      max: undefined,
      packName: undefined,
      user_id: undefined
    }
    dispatch(setPackParams(reset))
  }

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

