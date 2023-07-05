import ToggleButton from '@mui/material/ToggleButton/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup/ToggleButtonGroup'
import { buttonStyle } from 'features/pack/components/searchBar/buttonsShowPack/style'
import s from './style.module.scss'
import { memo } from 'react'
import { useSearchPacks } from 'features/pack/hook/useSearchPacks'

export const ButtonsShowPacks = memo(() => {
  const { setMyAllCards, paramsCardId, userId } = useSearchPacks()
  const getPackHandler = (user_id: string) => setMyAllCards(user_id)

  return (
    <div className={s.container}>
      <label htmlFor='IdButtonGroup'>Show packs cards</label>
      <ToggleButtonGroup id={'IdButtonGroup'} exclusive value={!!paramsCardId ? paramsCardId : ''}>
        <ToggleButton value={userId} sx={buttonStyle} onClick={() => getPackHandler(userId)}>
          My
        </ToggleButton>
        <ToggleButton value={''} sx={buttonStyle} onClick={() => getPackHandler('')}>
          All
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
})

