import { useAppDispatch, useAppSelector } from 'common/hooks'
import { useSearchParams } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { packsThunks } from 'features/pack/service/packsSlice'
import {
  cardPacksTotalCountSelect,
  SelectMaxCardsCount,
  SelectMaxPacksParam,
  SelectMinCardsCount,
  SelectMinPacksParam,
  selectPackNameParam,
  SelectCardPacks,
  pageCountSelect,
  pageSelect,
  selectUserIdParam
} from 'features/pack/selectors'
import { useSelector } from 'react-redux'
import { useDebounce } from 'common/hooks/useDebounce'
import { PackArgs } from 'features/pack/service/packsTypes'
import { selectUserId } from 'features/profile/selectors/selectors'

export const useSearchPacks = () => {
  const dispatch = useAppDispatch()
  const userId = useAppSelector(selectUserId)
  const packName = useSelector(selectPackNameParam)
  const userIdParams = useSelector(selectUserIdParam)
  const minCardsCount = useSelector(SelectMinCardsCount)
  const maxCardsCount = useSelector(SelectMaxCardsCount)
  const min = useSelector(SelectMinPacksParam)
  const max = useSelector(SelectMaxPacksParam)
  const packs = useSelector(SelectCardPacks)


// запись параметров в поисковую строку
  const [searchParams, setSearchParams] = useSearchParams()
  const params = Object.fromEntries(searchParams)

  useEffect(() => {
    const lastParams: PackArgs = {}
    if (userIdParams || userIdParams === '') lastParams.user_id = userIdParams
    if (packName || packName === '') lastParams.packName = packName
    if (min || min === 0) lastParams.min = min.toString()
    if (max || max === 0) lastParams.max = max.toString()
    setSearchParams({ ...lastParams })
  }, [userIdParams, packName, min, max])

//поиск по имени
  const [name, setName] = useState<string>()
  const debounceName = useDebounce(name)

  useEffect(() => {
    if (debounceName === undefined) return
    dispatch(packsThunks.getPacks({ packName }))
  }, [debounceName])

  const setPackName = useCallback((packName: string) => {
    setName(packName)
  }, [])


  //количество карточек
  const setMinMaxCards = useCallback((minMax: number[]) => {
  /*  dispatch(packAction.setPackParams({ min: minMax[0], max: minMax[1] }))*/
  }, [])


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
    max,
    min,
    maxCardsCount,
    minCardsCount,
    setMinMaxCards,
    userId,
    paramsCardId: userIdParams,
    params,
    setPackName,
    packName,
    dispatch
  }
}

