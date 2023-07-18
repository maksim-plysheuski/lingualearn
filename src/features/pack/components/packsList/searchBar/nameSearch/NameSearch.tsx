import React, { useCallback } from 'react'
import { InputSearch } from 'common/components'
import s from './style.module.scss'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { setPackParams } from 'features/pack/service/sortPackSlice'
import { packNameSelect } from 'features/pack/service'

export const NameSearch = () => {
  const dispatch = useAppDispatch()
  const sortPackName = useAppSelector(packNameSelect)

  const setSearchParamsHandler = useCallback((packName: string) => dispatch(setPackParams({ packName })), [])

  return (
    <div className={s.container}>
      <InputSearch searchCallback={setSearchParamsHandler} valueName={sortPackName} />
    </div>

  )
}

