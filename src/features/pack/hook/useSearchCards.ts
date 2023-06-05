import { useAppDispatch, useAppSelector } from 'common/hooks'
import { useSearchParams } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { PackArgs, TGetPacksArg } from 'features/pack/packApi'
import { packAction, packsThunks } from 'features/pack/packs.slice'
import useDebounce from 'common/hooks/useDebounce'

export const useSearchCards = () => {
  const dispatch = useAppDispatch()
  const packName = useAppSelector(state => state.packs.packParams.packName)
  const paramsCardId = useAppSelector(state => state.packs.packParams.user_id)
  const userId = useAppSelector(state => state.auth.profile._id)
  const minCardsCount = useAppSelector(state => state.packs.packs.minCardsCount)
  const maxCardsCount = useAppSelector(state => state.packs.packs.maxCardsCount)
  const min = useAppSelector(state => state.packs.packParams.min)
  const max = useAppSelector(state => state.packs.packParams.max)

// запись параметров в поисковую строку
  const [searchParams, setSearchParams] = useSearchParams()
  const params = Object.fromEntries(searchParams)
  useEffect(() => {
    const lastParams: PackArgs = {}
    if (paramsCardId || paramsCardId === '') lastParams.user_id = paramsCardId
    if (packName || packName === '') lastParams.packName = packName
    if (min || min === 0) lastParams.min = min.toString()
    if (max || max === 0) lastParams.max = max.toString()
    setSearchParams({ ...lastParams })
  }, [paramsCardId, packName, min, max])

//поиск по имени
  const [name, setName] = useState<string>()
  const debounceName = useDebounce(name)

  useEffect(() => {
    if (debounceName === undefined) return
    dispatch(packsThunks.getPacks({ packName }))
  }, [debounceName])

  const setPackName = useCallback((packName: string) => {
    dispatch(packAction.setPackParams({ packName }))
    setName(packName)
  }, [])

  //чьи карточки
  const setMyAllCards = useCallback((user_id: string) => {
    dispatch(packAction.setPackParams({ user_id }))
    dispatch(packsThunks.getPacks({ user_id }))
  }, [])

  //количество карточек

  const setMinMaxCards = useCallback((minMax: number[]) => {
    dispatch(packAction.setPackParams({ min: minMax[0], max: minMax[1] }))
  }, [])

  //сброс поисковых настроек
  const resetSearchParams = () => {
    const resetParams: TGetPacksArg = {
      packName: '',
      user_id: '',
      min: minCardsCount,
      max: maxCardsCount
    }
    dispatch(packAction.setPackParams(resetParams))
    dispatch(packsThunks.getPacks({}))
  }

  return {
    resetSearchParams,
    max,
    min,
    maxCardsCount,
    minCardsCount,
    setMinMaxCards,
    userId,
    paramsCardId,
    setMyAllCards,
    params,
    setPackName,
    packName,
    dispatch
  }
}

