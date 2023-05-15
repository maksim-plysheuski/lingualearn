import ToggleButton from '@mui/material/ToggleButton/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup/ToggleButtonGroup'
import React from 'react'
import { buttonStyle } from 'features/pack/searchBar/buttonsShowPack/style'

export const ButtonsShowPacks = () => {
  return (
    <>
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
    </>
  )
}

