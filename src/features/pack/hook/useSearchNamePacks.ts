import { useCallback, useEffect, useState } from 'react'
import { useDebounce } from 'common/hooks/useDebounce'
import { resetPackParams, setPackParams } from 'features/pack/service/packs.params.slice'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { selectPackNameParam } from 'features/pack/selectors'


export const useSearchNamePacks = () => {
  const dispatch = useAppDispatch()
  const packNameParam = useAppSelector(selectPackNameParam)
  const [packName, setPackName] = useState<string>('')
  const debounceName = useDebounce(packName, 800)

  useEffect(() => {
    if (debounceName === '') return
    dispatch(setPackParams({ packName: debounceName }))
  }, [debounceName])

  const onChangeHandler = useCallback((packName: string) => {
    setPackName(packName)
  }, [dispatch])

  const clearSearchFilter = useCallback(() => {
    dispatch(resetPackParams())
  }, [dispatch])

  return { packName, setPackName, packNameParam, onChangeHandler, clearSearchFilter }
}