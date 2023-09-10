import ToggleButton from '@mui/material/ToggleButton/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup/ToggleButtonGroup'
import { buttonStyle } from './style'
import s from './style.module.scss'
import { memo } from 'react'
import { useSortPacks } from 'features/pack/hook/useSortPacks'

export const ButtonsShowPacks = memo(() => {
  const { userId, userIdParam, getPacksHandler, isAppLoading } = useSortPacks()

  return (
    <div className={s.container}>
      <span>Show packs cards</span>
      <ToggleButtonGroup id={'IdButtonGroup'} exclusive value={userIdParam ? userIdParam : ''} disabled={isAppLoading}>
        <ToggleButton value={userId} sx={buttonStyle} onClick={() => getPacksHandler(userId)}>
          My
        </ToggleButton>
        <ToggleButton value={''} sx={buttonStyle} onClick={() => getPacksHandler('')}>
          All
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
})

