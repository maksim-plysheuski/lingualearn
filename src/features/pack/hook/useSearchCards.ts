import { useAppDispatch, useAppSelector } from 'common/hooks'
import { useSearchParams } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { PackArgs, TGetPacksArg } from 'features/pack/packApi'
import { packAction, packsThunks } from 'features/pack/packs.slice'

export const useSearchCards = () => {
  const dispatch = useAppDispatch()
  const [interval, setInterval] = useState<number | undefined>(undefined)
  const packName = useAppSelector(state => state.packs.packParams.packName)
  const paramsCardId = useAppSelector(state => state.packs.packParams.user_id)
  const userId = useAppSelector(state => state.auth.profile._id)
  const minCardsCount = useAppSelector(state => state.packs.packs.minCardsCount)
  const maxCardsCount = useAppSelector(state => state.packs.packs.maxCardsCount)
  const min = useAppSelector(state => state.packs.packParams.min)
  const max = useAppSelector(state => state.packs.packParams.max)
  const [searchParams, setSearchParams] = useSearchParams()
  const params = Object.fromEntries(searchParams)

  useEffect(() => {
    const lastParams: PackArgs = {}
    if (paramsCardId) lastParams.user_id = paramsCardId
    if (packName) lastParams.packName = packName
    if (min) lastParams.min = min.toString()
    if (max) lastParams.max = max.toString()
    setSearchParams({ ...lastParams })
  }, [paramsCardId, packName, min, max])

  const setPackName = (packName: string) => {
    dispatch(packAction.setPackParams({ packName }))
    clearTimeout(interval)
    const idInterval = setTimeout(() => {
      dispatch(packsThunks.getPacks({ packName }))
    }, 700)
    setInterval(+idInterval)
  }

  const setMyAllCards = useCallback((user_id: string) => {
    dispatch(packAction.setPackParams({ user_id }))
    dispatch(packsThunks.getPacks({ user_id }))
  }, [])

  const setMinMaxCards = (minMax: number[]) => {
    dispatch(packAction.setPackParams({ min: minMax[0], max: minMax[1] }))
  }

  const resetSearchParams = () => {
    const resetParams: TGetPacksArg = {
      packName: '',
      sortPacks: '',
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

