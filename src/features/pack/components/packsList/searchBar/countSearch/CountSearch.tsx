import { memo } from 'react'
import Slider from '@mui/material/Slider'
import s from 'features/pack/components/packsList/searchBar/countSearch/style.module.scss'
import { packsThunks } from 'features/pack/packs.slice'
import { useSearchPacks } from 'features/pack/hook/useSearchPacks'
import { sliderStyle } from 'features/pack/components/packsList/searchBar/countSearch/style'

export const CountSearch = memo(() => {

  const { setMinMaxCards, maxCardsCount, minCardsCount, max, min, dispatch } = useSearchPacks()
  const handleChange = (event: Event, newValue: number | number[]) => {
    setMinMaxCards(newValue as number[])
  }

  const onChangeCommittedHandler = () => dispatch(packsThunks.getPacks({}))

  return (
    <div className={s.container}>
      <span>Number of cards</span>
      <div className={s.countContainer} id={'CountLabel'}>
        <div className={s.count}>{minCardsCount}</div>
        <div className={s.sliderContainer}>
          <Slider sx={sliderStyle}
                  max={maxCardsCount}
                  min={minCardsCount}
                  valueLabelDisplay='auto'
                  value={[+min!, +max!] as number[]}
                  onChange={handleChange}
                  onChangeCommitted={onChangeCommittedHandler}
          />
        </div>
        <div className={s.count}>{maxCardsCount}</div>
      </div>
    </div>
  )
})

