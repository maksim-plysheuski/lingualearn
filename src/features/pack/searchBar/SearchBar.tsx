import React from 'react'
import { InputSearch } from 'common/components/Inputs/inputSearch/InputSearch'
import s from './style.module.scss'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { packAction } from 'features/pack/packs.slice'

export const SearchBar = () => {

  const nameSearch = useAppSelector(state => state.packs.packParams.packName)
  const dispatch = useAppDispatch()
  const setPackParamName = (packName: string) => {
    dispatch(packAction.setPackParams({ packName }))
  }

  return (
    <div className={s.container}>
      <InputSearch nameSearch={nameSearch!} searchCallback={setPackParamName} width={'412px'} />
    </div>
  )
}

