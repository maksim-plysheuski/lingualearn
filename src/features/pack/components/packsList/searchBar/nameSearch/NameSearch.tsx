import React, { useEffect } from 'react'
import { InputSearch } from 'common/components'
import s from './style.module.scss'
import { useSearchPacks } from 'features/pack/hook/useSearchPacks'

export const NameSearch = () => {
  const { packName, searchPackHandler, packNameParam } = useSearchPacks()

  useEffect(() => {
    if (!packNameParam && packName) {
      searchPackHandler('')
    }
  }, [packNameParam])

  return (
    <div className={s.container}>
      <InputSearch searchCallback={searchPackHandler}
                   inputValue={packName ?? ''} />
    </div>
  )
}

