import React from 'react'
import { useSearchPacks } from 'features/pack/hook/useSearchPacks'
import { InputSearch } from 'common/components'
import s from 'features/pack/components/packsList/searchBar/nameSearch/style.module.scss'

export const NameSearch = () => {
  const { setPackName, packName } = useSearchPacks()
  const setSearchParamsHandler = (packName: string) => setPackName(packName)

  return (
    <div className={s.container} >
      <InputSearch searchCallback={setSearchParamsHandler}
                   valueName={packName!}
      />
    </div>

  )
}

