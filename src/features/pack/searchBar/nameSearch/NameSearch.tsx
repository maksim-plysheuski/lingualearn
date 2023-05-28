import React, { useEffect, useState } from 'react'
import { useAppDispatch } from 'common/hooks'
import { useSearchParams } from 'react-router-dom'
import { packAction } from 'features/pack/packs.slice'
import { InputSearch } from 'common/components/Inputs/inputSearch/InputSearch'
import useDebounce from 'common/hooks/useDebounce'

export const NameSearch = () => {

  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const [name, setName] = useState<string | null>(null)
  const nameUrl = searchParams.get('packName')
  const debounce = useDebounce<string | null>(name)

  useEffect(() => {
    if (!nameUrl) return
    setName(nameUrl)
  }, [])

  useEffect(() => {
    if (name === null) return
    dispatch(packAction.setPackParams({ packName: name! }))
  }, [debounce])

  const setSearchParamsHandler = (packName: string) => {
    setSearchParams({ packName })
    setName(packName)
  }
  return (
    <>
      <InputSearch callback={setSearchParamsHandler}
                   nameSearch={name}
                   width={'412px'} />
    </>
  )
}

