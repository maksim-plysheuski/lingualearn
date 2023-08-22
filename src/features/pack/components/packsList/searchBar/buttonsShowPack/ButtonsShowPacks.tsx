import ToggleButton from '@mui/material/ToggleButton/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup/ToggleButtonGroup'
import { buttonStyle } from './style'
import s from './style.module.scss'
import { memo } from 'react'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { selectIsAppLoading } from 'app'
import { selectUserId } from 'features/profile/selectors/selectors'
import { setPackParams } from 'features/pack/service/packsParams.slice'
import { selectUserIdParam } from 'features/pack/selectors'

export const ButtonsShowPacks = memo(() => {
  const dispatch = useAppDispatch()
  const userIdParam = useAppSelector(selectUserIdParam)
  const userId = useAppSelector(selectUserId)
  const isLoading = useAppSelector(selectIsAppLoading)

  const getPackHandler = (user_id: string) => dispatch(setPackParams({ user_id }))

  return (
    <div className={s.container}>
      <span>Show packs cards</span>
      <ToggleButtonGroup id={'IdButtonGroup'} exclusive value={userIdParam ? userIdParam : ''} disabled={isLoading}>
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

