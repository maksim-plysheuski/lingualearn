import ToggleButton from '@mui/material/ToggleButton/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup/ToggleButtonGroup'
import { buttonStyle } from 'features/pack/components/searchBar/buttonsShowPack/style'
import s from 'features/pack/components/searchBar/buttonsShowPack/style.module.scss'
import { memo, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { setPackParams } from 'features/pack/service/sortPackSlice'

export const ButtonsShowPacks = memo(() => {
  const dispatch = useAppDispatch()
  const [showButton, setShowButton] = useState<string>('')
  const userId = useAppSelector(state => state.auth.profile._id)

  const getPackHandler = (user_id: string) => {
    dispatch(setPackParams({ user_id }))
    setShowButton(user_id)
  }

  return (
    <div className={s.container}>
      <label htmlFor='IdButtonGroup'>Show packs cards</label>
      <ToggleButtonGroup id={'IdButtonGroup'} exclusive value={showButton}>
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

