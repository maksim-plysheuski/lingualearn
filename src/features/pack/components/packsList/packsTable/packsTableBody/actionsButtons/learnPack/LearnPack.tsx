import IconButton from '@mui/material/IconButton'
import * as React from 'react'
import { Zoom } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import { FC } from 'react'
import {
  iconStyle
} from 'features/pack/components/packsList/packsTable/packsTableBody/actionsButtons/editPack/EditPack'

type Props = {
  cardsCount: number
}

export const LearnPack: FC<Props> = ({cardsCount}) => {

  return(
    <>
      <Tooltip title={cardsCount === 0 ? "" : 'Learn'}
               arrow placement='top'
               TransitionComponent={Zoom}
               TransitionProps={{ timeout: 400 }}>
        <span>
          <IconButton disabled={cardsCount === 0}
                      sx={iconStyle}>
          <div><PlayCircleOutlinedIcon /></div>
        </IconButton>
        </span>
      </Tooltip>
    </>
  )
}