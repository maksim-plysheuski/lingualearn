import ToggleButton from '@mui/material/ToggleButton/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup/ToggleButtonGroup'
import { buttonStyle } from 'features/pack/components/searchBar/buttonsShowPack/style'
import s from 'features/pack/components/searchBar/buttonsShowPack/style.module.scss'
import { memo } from 'react'
import { useSearchPaks } from 'features/pack/hook/useSearchPaks'

export const ButtonsShowPacks = memo(() => {
  const { setMyAllCards, paramsCardId, userId } = useSearchPaks()

  const getPackHandler = (user_id: string) => {
    setMyAllCards(user_id)
  }

  return (
    <div className={s.container}>
      <div>
        Show packs cards
      </div>
      <ToggleButtonGroup exclusive value={!!paramsCardId ? paramsCardId : ''}>
        <ToggleButton value={userId}
                      sx={buttonStyle}
                      onClick={() => getPackHandler(userId)}
        >My</ToggleButton>
        <ToggleButton value={''}
                      sx={buttonStyle}
                      onClick={() => getPackHandler('')}
        >All</ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
})

