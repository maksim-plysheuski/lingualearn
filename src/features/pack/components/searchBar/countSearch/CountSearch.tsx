import { memo } from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import s from 'features/pack/components/searchBar/countSearch/style.module.scss'

import { packsThunks } from 'features/pack/packs.slice'
import { useSearchPaks } from 'features/pack/hook/useSearchPaks'
import { sliderStyle } from 'features/pack/components/searchBar/countSearch/style'

export const CountSearch = memo(() => {

  const { setMinMaxCards, maxCardsCount, minCardsCount, max, min, dispatch } = useSearchPaks()

  const handleChange = (event: Event, newValue: number | number[]) => {
    setMinMaxCards(newValue as number[])
  }

  const onChangeCommittedHandler = () => {
    dispatch(packsThunks.getPacks({}))
  }

  return (

    <div className={s.container}>
      <label htmlFor='CountLabel'>Number of cards</label>
      <div className={s.countContainer} id={'CountLabel'}>
        <div className={s.count}>{minCardsCount}</div>
        <Box sx={{
          width: '155px',
          marginLeft: '12px',
          marginRight: '12px',
        }}>
          <Slider sx={sliderStyle}
            max={maxCardsCount}
            min={minCardsCount}
            valueLabelDisplay='auto'
            value={[+min!, +max!] as number[]}
            onChange={handleChange}
            onChangeCommitted={onChangeCommittedHandler}
          />
        </Box>
        <div className={s.count}>{maxCardsCount}</div>
      </div>
    </div>
  )
})

