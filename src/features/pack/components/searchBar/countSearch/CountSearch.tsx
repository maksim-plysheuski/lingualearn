import { memo, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import s from 'features/pack/components/searchBar/countSearch/style.module.scss'
import { sliderStyle } from 'features/pack/components/searchBar/countSearch/style'
import { useGetPacksQuery } from 'features/pack/service/pack.slice'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { setPackParams } from 'features/pack/service/sortPackSlice'
import { maxPackSelect, minPackSelect } from 'features/pack/service'

export const CountSearch = memo(() => {
  const dispatch = useAppDispatch()
  const min = useAppSelector(minPackSelect)
  const max = useAppSelector(maxPackSelect)
  const sortPackParams = useAppSelector(state => state.sortPackSlice.packParams)

  const { data } = useGetPacksQuery(sortPackParams)

  const [value, setValue] = useState<number[]>([data!.minCardsCount, data!.maxCardsCount])

  useEffect(() => {
    if (min === undefined && max === undefined) setValue([data!.minCardsCount, data!.maxCardsCount])
  }, [min, max])

  const handleChange = (event: Event, newValue: number | number[]) => setValue(newValue as number [])

  const onChangeCommittedHandler = () => dispatch(setPackParams({ min: value[0], max: value[1] }))

  return (
    <div className={s.container}>
      <label htmlFor='CountLabel'>Number of cards</label>
      <div className={s.countContainer} id={'CountLabel'}>
        <div className={s.count}>{data!.minCardsCount}</div>
        <Box sx={{
          width: '155px',
          marginLeft: '12px',
          marginRight: '12px'
        }}>
          <Slider sx={sliderStyle}
                  max={data!.maxCardsCount}
                  min={data!.minCardsCount}
                  valueLabelDisplay='auto'
                  value={value}
                  onChange={handleChange}
                  onChangeCommitted={onChangeCommittedHandler}
          />
        </Box>
        <div className={s.count}>{data!.maxCardsCount}</div>
      </div>
    </div>
  )
})

