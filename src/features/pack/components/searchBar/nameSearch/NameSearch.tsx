import React from 'react'
import { InputSearch } from 'common/components/Inputs/inputSearch/InputSearch'
import { useSearchPaks } from 'features/pack/hook/useSearchPaks'

export const NameSearch = () => {
  const { setPackName, packName } = useSearchPaks()

  const setSearchParamsHandler = (packName: string) => {
    setPackName(packName)
  }

  return (
    <>
      <InputSearch callback={setSearchParamsHandler}
                   nameSearch={packName!}
                   width={'412px'} />
    </>
  )
}

