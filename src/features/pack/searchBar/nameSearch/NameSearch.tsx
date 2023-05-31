import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { packAction } from 'features/pack/packs.slice'
import { InputSearch } from 'common/components/Inputs/inputSearch/InputSearch'
import useDebounce from 'common/hooks/useDebounce'

export const NameSearch = () => {
  const dispatch = useAppDispatch()
  const packName = useAppSelector(state => state.packs.packParams.packName)
  const [name, setName] = useState<string>(packName!)
  const debounce = useDebounce<string | null>(name!)

  useEffect(() => {
    if (name === undefined) return
    dispatch(packAction.setPackParams({ packName: name }))
  }, [debounce])

  const setSearchParamsHandler = (packName: string) => {
    setName(packName)
  }

  return (
    <>
      <InputSearch callback={setSearchParamsHandler}
                   nameSearch={name!}
                   width={'412px'} />
    </>
  )
}

