import React, { useCallback, useEffect, useState } from 'react'
import { InputSearch } from 'common/components'
import s from './style.module.scss'
import { useDebounce } from 'common/hooks/useDebounce'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { setPackParams } from 'features/pack/service/packsParams.slice'
import { selectPackNameParam } from 'features/pack/selectors'

export const NameSearch = () => {
  const dispatch = useAppDispatch()
  const searchPackName = useAppSelector(selectPackNameParam)

  const [name, setName] = useState<string>()
  const debounceName = useDebounce(name)

  useEffect(() => {
    if (debounceName === undefined) return
    dispatch(setPackParams({packName: debounceName}))
  }, [debounceName])


  const setParamsHandler = useCallback((packName: string) => {
    setName(packName)
  }, [searchPackName])


  return (
    <div className={s.container} >
      <InputSearch searchCallback={setParamsHandler}
                   valueName={searchPackName}
      />
    </div>

  )
}

