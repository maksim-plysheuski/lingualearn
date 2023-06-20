import React from 'react'
import { useSearchPaks } from 'features/pack/hook/useSearchPaks'
import { InputSearch } from 'common/components'
import s from './style.module.scss'

export const NameSearch = () => {
  const { setPackName, packName } = useSearchPaks()

  const setSearchParamsHandler = (packName: string) => {
    setPackName(packName)
  }

  return (
    <div className={s.container} >
      <InputSearch searchCallback={setSearchParamsHandler}
                   valueName={packName!}
      />
    </div>

  )
}

