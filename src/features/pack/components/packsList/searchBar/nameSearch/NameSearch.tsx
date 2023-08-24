import React, { useCallback, useEffect } from 'react'
import { InputSearch } from 'common/components'
import s from './style.module.scss'
import { useSortPacks } from 'features/pack/hook/useSortPacks'

export const NameSearch = () => {
  const { searchPackName, setSearchPackName, packNameParam } = useSortPacks()

  useEffect(() => {
    if (!packNameParam && searchPackName) {
      setSearchPackName('')
    }
  }, [packNameParam])

  const setParamsHandler = useCallback((packName: string) => {
    setSearchPackName(packName)
  }, [packNameParam])

  return (
    <div className={s.container}>
      <InputSearch searchNameCallback={setParamsHandler}
                   valueName={searchPackName} />
    </div>

  )
}

