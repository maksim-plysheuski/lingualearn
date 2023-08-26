import { useAppDispatch, useAppSelector } from 'common/hooks'
import { useCallback, useEffect, useState } from 'react'
import {
  selectMaxPacksParam,
  selectMinPacksParam,
  selectPackNameParam,
  selectUserIdParam
} from 'features/pack/selectors'
import { useDebounce } from 'common/hooks/useDebounce'
import { setPackParams } from 'features/pack/service/packs.params.slice'
import { useGetPacks } from 'features/pack/hook/useGetPacks'
import { selectUserId } from 'features/profile/selectors/selectors'
import { selectIsAppLoading } from 'app'

export const useSortPacks = () => {
  const dispatch = useAppDispatch()
  const minParam = useAppSelector(selectMinPacksParam)
  const maxParam = useAppSelector(selectMaxPacksParam)
  const packNameParam = useAppSelector(selectPackNameParam)

  /**
   * Sort packs by inputted name / send request with delay using useDebounce hook
   */
  const [searchPackName, setSearchPackName] = useState<string>('')
  const debounceName = useDebounce(searchPackName, 800)
  useEffect(() => {
    if (debounceName === "") return
    dispatch(setPackParams({ packName: debounceName }))
  }, [debounceName])


  /**
   * Sort packs by count of cards
   */
  const { data: packs } = useGetPacks()
  const [sliderValue, setSliderValue] = useState<number[]>([packs!.minCardsCount, packs!.maxCardsCount])

  useEffect(() => {
    if (!minParam && !maxParam) {
      setSliderValue([packs!.minCardsCount!, packs!.maxCardsCount!])
    }
  }, [minParam, maxParam])

  const onChangeCommittedHandler = useCallback(() => {
    dispatch(setPackParams({ min: sliderValue[0], max: sliderValue[1] }))
  }, [sliderValue])


  /**
   * Toggle buttons show all or my packs
   */
  const userIdParam = useAppSelector(selectUserIdParam)
  const userId = useAppSelector(selectUserId)
  const isAppLoading = useAppSelector(selectIsAppLoading)

  const getPacksHandler = (user_id: string) => dispatch(setPackParams({ user_id }))


  /**
   * Pagination
   */
  const getNewPage = (page: number, size: number) => dispatch(setPackParams({ page, pageCount: size }))


  return {
    getNewPage,
    userId,
    getPacksHandler,
    isAppLoading,
    userIdParam,
    dispatch,
    packNameParam,
    onChangeCommittedHandler,
    searchPackName,
    setSliderValue,
    sliderValue,
    packs,
    setSearchPackName
  }
}

