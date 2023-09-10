import React, { useEffect } from 'react'
import { InputSearch } from 'common/components'
import s from './style.module.scss'
import { useSearchNamePacks } from 'features/pack/hook/useSearchNamePacks'

export const NameSearch = () => {
  const { packName, onChangeHandler, packNameParam } = useSearchNamePacks()

  useEffect(() => {
    if (!packNameParam && packName) {
      onChangeHandler('')
    }
  }, [packNameParam])

  return (
    <div className={s.container}>
      <InputSearch searchNameCallback={onChangeHandler}
                   valueName={packName} />
    </div>
  )
}

