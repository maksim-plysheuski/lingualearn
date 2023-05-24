import React, { useCallback } from 'react'
import { InputSearch } from 'common/components/Inputs/inputSearch/InputSearch'
import { ButtonsShowPacks } from 'features/pack/searchBar/buttonsShowPack/ButtonsShowPacks'
import { CountSearch } from 'features/pack/searchBar/countSearch/CountSearch'
import { ResetButton } from 'features/pack/searchBar/resetButton/resetButton'
import s from './style.module.scss'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { packAction } from 'features/pack/packs.slice'

export const SearchBar = () => {

  const nameSearch = useAppSelector(state => state.packs.packParams.packName)
  const dispatch = useAppDispatch()
  const setPackParamName = useCallback((packName: string) => {
    dispatch(packAction.setPackParams({ packName }))
  }, [])

  return (
    <div className={s.container}>
      <InputSearch nameSearch={nameSearch!} searchCallback={setPackParamName} width={'412px'} />
      <ButtonsShowPacks />
      <CountSearch />
      <ResetButton />
    </div>
  )
}

