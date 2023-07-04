import React from 'react'
import { useSearchPaks } from 'features/pack/hook/useSearchPaks'
import { InputSearch } from 'common/components'
import s from './style.module.scss'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { setPackParams } from 'features/pack/service/sortPackSlice'

export const NameSearch = () => {
  const dispatch = useAppDispatch()
  const sortPackName = useAppSelector(state => state.sortPackSlice.packParams.packName)

  const setSearchParamsHandler = (packName: string) => {
    dispatch(setPackParams({ packName }))
  }

  return (
    <div className={s.container}>
      <InputSearch searchCallback={setSearchParamsHandler} valueName={sortPackName!} />
    </div>

  )
}

