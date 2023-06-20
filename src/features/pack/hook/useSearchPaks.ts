import { useAppDispatch, useAppSelector } from 'common/hooks'
import { useSearchParams } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { PackArgs } from 'features/pack/packApi'
import { packAction, packsThunks } from 'features/pack/packs.slice'
import useDebounce from 'common/hooks/useDebounce'
import {
  cardPacksTotalCountSelect,
  maxCardsCountSelect,
  maxSelect,
  minCardsCountSelect,
  minSelect,
  namePackParamsSelect,
  packsSelect,
  pageCountSelect,
  pageSelect,
  paramsCardIdSelect
} from 'features/pack/packSelectors'
import { useSelector } from 'react-redux'

export const useSearchPaks = () => {
  const dispatch = useAppDispatch()
  const userId = useAppSelector(state => state.auth.profile._id)
  const packName = useSelector(namePackParamsSelect)
  const paramsCardId = useSelector(paramsCardIdSelect)
  const minCardsCount = useSelector(minCardsCountSelect)
  const maxCardsCount = useSelector(maxCardsCountSelect)
  const min = useSelector(minSelect)
  const max = useSelector(maxSelect)
  const packs = useSelector(packsSelect)


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
    dispatch(packsThunks.getPacks({
      packName: undefined,
      user_id: '',
      min: undefined,
      max: undefined
    }))
  }
  //для пагинации
  const pageSize = useSelector(pageCountSelect)
  //количество страниц
  const cardPacksTotalCount = useSelector(cardPacksTotalCountSelect)
  //текущая страница
  const page = useSelector(pageSelect)

  const getNewPage = (page: number, size: number) => {
    dispatch(packsThunks.getPacks({ page, pageCount: size }))
  }

  return {
    getNewPage,
    cardPacksTotalCount,
    pageSize,
    page,
    packs,
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

