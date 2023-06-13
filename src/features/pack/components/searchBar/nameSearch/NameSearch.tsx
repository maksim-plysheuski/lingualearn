import React from 'react'
import { InputSearch } from 'common/components/Inputs/inputSearch/InputSearch'
import { useSearchCards } from 'features/pack/hook/useSearchCards'

export const NameSearch = () => {
  const { setPackName, packName } = useSearchCards()

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

