import { useAppDispatch, useAppSelector } from 'common/hooks'
import { useCallback, useEffect, useState } from 'react'
import { packsThunks } from 'features/pack/service/packsSlice'
import {
  cardPacksTotalCountSelect,
  pageCountSelect,
  pageSelect, SelectMaxPacksParam, SelectMinPacksParam, selectPackNameParam
} from 'features/pack/selectors'
import { useSelector } from 'react-redux'
import { useDebounce } from 'common/hooks/useDebounce'
import { setPackParams } from 'features/pack/service/packsParams.slice'
import { useGetPacks } from 'features/pack/hook/useGetPacks'

export const useSortPacks = () => {
  const dispatch = useAppDispatch()
  const minParam = useAppSelector(SelectMinPacksParam)
  const maxParam = useAppSelector(SelectMaxPacksParam)
  const packNameParam = useAppSelector(selectPackNameParam)
  const { data: packs } = useGetPacks()
  const [searchPackName, setSearchPackName] = useState<string>("")
  const [sliderValue, setSliderValue] = useState<number[]>([packs!.minCardsCount, packs!.maxCardsCount])

//sort packs by name
  const debounceName = useDebounce(searchPackName)
  useEffect(() => {
    if (debounceName === undefined) return
    dispatch(setPackParams({packName: debounceName}))
  }, [debounceName])


  //sort packs by cards count
  useEffect(() => {
    if (!minParam && !maxParam) {
      setSliderValue([packs!.minCardsCount!, packs!.maxCardsCount!])
    }
  }, [minParam, maxParam])


  const onChangeCommittedHandler = useCallback(() => {
    dispatch(setPackParams({ min: sliderValue[0], max: sliderValue[1] }))
  }, [sliderValue])


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
    dispatch,
    packNameParam,
    onChangeCommittedHandler,
    searchPackName,
    setSliderValue,
    sliderValue,
    packs,
    cardPacksTotalCount,
    pageSize,
    page,
    setSearchPackName,
  }
}

