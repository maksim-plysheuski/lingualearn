import { memo, useState } from 'react'
import Slider from '@mui/material/Slider'
import s from './style.module.scss'
import { sliderStyle } from 'features/pack/components/packsList/searchBar/countSearch/style'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { SelectMaxPacksParam, SelectMinPacksParam } from 'features/pack/selectors'
import { useGetPacks } from 'features/pack/hook/useGetPacks'
import { setPackParams } from 'features/pack/service/packsParams.slice'

export const CountSearch = memo(() => {
  const dispatch = useAppDispatch()
  const minParam = useAppSelector(SelectMinPacksParam)
  const maxParam = useAppSelector(SelectMaxPacksParam)
  const { data } = useGetPacks()

  const [value, setValue] = useState<number[]>([minParam ? minParam : data!.minCardsCount, maxParam ? maxParam : data!.maxCardsCount])

  const handleChange = (event: Event, newValue: number | number[]) => setValue(newValue as number [])

  const onChangeCommittedHandler = () => dispatch(setPackParams({ min: value[0], max: value[1] }))

  return (
    <div className={s.container}>
      <span>Number of cards</span>
      <div className={s.countContainer} id={'CountLabel'}>
        <div className={s.count}>{data?.minCardsCount}</div>
        <div className={s.sliderContainer}>
          <Slider sx={sliderStyle}
                  max={data?.maxCardsCount}
                  min={data?.minCardsCount}
                  valueLabelDisplay='auto'
                  value={value}
                  onChange={handleChange}
                  onChangeCommitted={onChangeCommittedHandler}
          />
        </div>
        <div className={s.count}>{data?.maxCardsCount}</div>
      </div>
    </div>
  )
})

