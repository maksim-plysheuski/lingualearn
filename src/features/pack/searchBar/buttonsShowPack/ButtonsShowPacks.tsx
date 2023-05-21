import ToggleButton from '@mui/material/ToggleButton/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup/ToggleButtonGroup'
import { buttonStyle } from 'features/pack/searchBar/buttonsShowPack/style'
import s from './style.module.scss'

export const ButtonsShowPacks = () => {
  return (
    <div className={s.container}>
      <div>
        Show packs cards
      </div>
      <ToggleButtonGroup
        exclusive
        value={''}
      >
        <ToggleButton value='My'
                      sx={buttonStyle}
        >My</ToggleButton>
        <ToggleButton value=''
                      sx={buttonStyle}

        >All</ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}

