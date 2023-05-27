import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { useSearchParams } from 'react-router-dom'
import { packAction } from 'features/pack/packs.slice'
import { InputSearch } from 'common/components/Inputs/inputSearch/InputSearch'
import useDebounce from 'common/hooks/useDebounce'

export const NameSearch = () => {
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const nameUrl = searchParams.get('packName')
  const nameParams = useAppSelector(state => state.packs.packParams.packName)

  const debounce = useDebounce<string | null>(nameUrl)

  console.log(nameParams)

  useEffect(() => {
    if (nameUrl === null) return
    dispatch(packAction.setPackParams({ packName: nameParams }))
  }, [debounce])


  const setSearchParamsHandler = (packName: string) => {
    setSearchParams({ packName })
  }
  return (
    <>
      <InputSearch callback={setSearchParamsHandler}
                   nameSearch={nameParams!}
                   width={'412px'} />
    </>
  )
}

