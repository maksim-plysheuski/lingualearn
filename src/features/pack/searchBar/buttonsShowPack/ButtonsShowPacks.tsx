import ToggleButton from '@mui/material/ToggleButton/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup/ToggleButtonGroup'
import { buttonStyle } from 'features/pack/searchBar/buttonsShowPack/style'
import s from './style.module.scss'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { packAction } from 'features/pack/packs.slice'
import { memo, useState } from 'react'

export const ButtonsShowPacks = memo(() => {

  const dispatch = useAppDispatch()
  const userId = useAppSelector(state => state.auth.profile._id)
  const [select, setSelect] = useState('')

  const getPackHandler = (user_id: string) => {
    dispatch(packAction.setPackParams({ user_id }))
    setSelect(user_id)
  }

  return (
    <div className={s.container}>
      <div>
        Show packs cards
      </div>
      <ToggleButtonGroup exclusive value={select}>
        <ToggleButton value={userId}
                      sx={buttonStyle}
                      onClick={() => getPackHandler(userId)}
        >My</ToggleButton>
        <ToggleButton value=''
                      sx={buttonStyle}
                      onClick={() => getPackHandler('')}
        >All</ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
})

