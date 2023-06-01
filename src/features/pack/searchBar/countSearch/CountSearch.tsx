import { memo, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import s from './style.module.scss'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { packAction } from 'features/pack/packs.slice'

export const CountSearch = memo(() => {
  const dispatch = useAppDispatch()
  const minValue = useAppSelector(state => state.packs.packs.minCardsCount)
  const maxValue = useAppSelector(state => state.packs.packs.maxCardsCount)
  const min = useAppSelector(state => state.packs.packParams.min)
  const max = useAppSelector(state => state.packs.packParams.max)

  const [value, setValue] = useState<number[]>([minValue, maxValue])

  useEffect(() => {
    setValue([min!, max!])
  }, [min, max])

  useEffect(() => {
    setValue([minValue, maxValue])
  }, [maxValue, minValue])

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[])
  }
  const onChangeCommittedHandler = () => {
    dispatch(packAction.setPackParams({ min: value[0], max: value[1] }))
  }

  return (
    <div className={s.container}>
      <span>Number of cards</span>
      <div className={s.countContainer}>
        <span className={s.count}>{value[0]}</span>
        <Box sx={{
          width: '155px',
          marginLeft: '12px',
          marginRight: '12px'
        }}>
          <Slider
            max={maxValue}
            min={minValue}
            getAriaLabel={() => 'Temperature range'}
            value={value}
            onChange={handleChange}
            onChangeCommitted={onChangeCommittedHandler}
          />
        </Box>
        <span className={s.count}>{value[1]}</span>
      </div>

    </div>

  )
})

