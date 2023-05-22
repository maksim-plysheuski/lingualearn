import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import s from './style.module.scss'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import useDebounce from 'common/hooks/useDebounce'
import { packAction } from 'features/pack/packs.slice'


export const CountSearch = () => {

  const minCountPacks = useAppSelector(state => state.packs.packs.minCardsCount)
  const maxCountPacks = useAppSelector(state => state.packs.packs.maxCardsCount)

  const dispatch = useAppDispatch()

  const [value, setValue] = React.useState<number[]>([minCountPacks, maxCountPacks])
  const debounce = useDebounce<number[]>(value)

  useEffect(() => {
    setValue([minCountPacks, maxCountPacks])
  }, [minCountPacks, maxCountPacks])

  useEffect(() => {
    if (value[0] === minCountPacks && value[1] === maxCountPacks) return
    dispatch(packAction.setPackParams({ min: value[0], max: value[1] }))
  }, [debounce])

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[])
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
            max={maxCountPacks}
            min={minCountPacks}
            getAriaLabel={() => 'Temperature range'}
            value={value}
            onChange={handleChange}
          />
        </Box>
        <span className={s.count}>{value[1]}</span>
      </div>

    </div>

  )
}

