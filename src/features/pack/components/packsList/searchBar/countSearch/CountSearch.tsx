import { memo } from 'react'
import Slider from '@mui/material/Slider'
import s from './style.module.scss'
import { sliderStyle } from 'features/pack/components/packsList/searchBar/countSearch/style'
import { useSortPacks } from 'features/pack/hook/useSortPacks'

export const CountSearch = memo(() => {
  const {packs, sliderValue, setSliderValue, onChangeCommittedHandler} = useSortPacks()

  const handleChange = (event: Event, newValue: number | number[]) => setSliderValue(newValue as number [])

  return (
    <div className={s.container}>
      <span>Number of cards</span>
      <div className={s.countContainer} id={'CountLabel'}>
        <div className={s.count}>{packs?.minCardsCount}</div>
        <div className={s.sliderContainer}>
          <Slider sx={sliderStyle}
                  max={packs?.maxCardsCount!}
                  min={packs?.minCardsCount!}
                  valueLabelDisplay='auto'
                  value={sliderValue}
                  onChange={handleChange}
                  onChangeCommitted={onChangeCommittedHandler} />
        </div>
        <div className={s.count}>{packs?.maxCardsCount}</div>
      </div>
    </div>
  )
})

