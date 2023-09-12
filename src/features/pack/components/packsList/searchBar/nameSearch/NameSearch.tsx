import React, { useEffect } from 'react'
import { InputSearch } from 'common/components'
import s from './style.module.scss'
import { useSearchNamePacks } from 'features/pack/hook/useSearchNamePacks'

export const NameSearch = () => {
  const { packName, searchPackHandler, packNameParam } = useSearchNamePacks()

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

