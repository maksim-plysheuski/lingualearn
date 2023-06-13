import { memo } from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import s from 'features/pack/components/searchBar/countSearch/style.module.scss'

import { packsThunks } from 'features/pack/packs.slice'
import { useSearchCards } from 'features/pack/hook/useSearchCards'

export const CountSearch = memo(() => {

  const { setMinMaxCards, maxCardsCount, minCardsCount,max,min, dispatch } = useSearchCards()

  const handleChange = (event: Event, newValue: number | number[]) => {
    setMinMaxCards(newValue as number[])
  }

  const onChangeCommittedHandler = () => {
    dispatch(packsThunks.getPacks({}))
  }

  return (
    <div className={s.container}>
      <span>Number of cards</span>
      <div className={s.countContainer}>
        <span className={s.count}>{minCardsCount}</span>
        <Box sx={{
          width: '155px',
          marginLeft: '12px',
          marginRight: '12px'
        }}>
          <Slider
            max={maxCardsCount}
            min={minCardsCount}
            valueLabelDisplay='auto'
            value={[+min!,+max!] as number[]}
            onChange={handleChange}
            onChangeCommitted={onChangeCommittedHandler}
          />
        </Box>
        <span className={s.count}>{maxCardsCount}</span>
      </div>
    </div>
  )
})

