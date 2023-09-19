import { useFetchPacks } from 'features/pack/hook/useFetchPacks'
import { useCallback, useEffect, useState } from 'react'
import { setPackParams } from 'features/pack/service/packs.params.slice'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { selectMaxPacksParam, selectMinPacksParam } from 'features/pack/selectors'


export const useSlider = () => {
  const dispatch = useAppDispatch()
  const { data: packs } = useFetchPacks()
  const minParam = useAppSelector(selectMinPacksParam)
  const maxParam = useAppSelector(selectMaxPacksParam)
  const [sliderValue, setSliderValue] = useState<number[]>([packs!.minCardsCount, packs!.maxCardsCount])

  useEffect(() => {
    if (!minParam && !maxParam) {
      setSliderValue([packs!.minCardsCount!, packs!.maxCardsCount!])
    }
  }, [minParam, maxParam])

  const onChangeCommittedHandler = useCallback(() => {
    dispatch(setPackParams({ min: sliderValue[0], max: sliderValue[1] }))
  }, [sliderValue])

  const onChangeHandler = (event: Event, newValue: number | number[]) => setSliderValue(newValue as number [])

  return { packs, sliderValue, setSliderValue, onChangeCommittedHandler, onChangeHandler }
}