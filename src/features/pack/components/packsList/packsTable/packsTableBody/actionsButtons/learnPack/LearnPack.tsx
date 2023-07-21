import IconButton from '@mui/material/IconButton'
import * as React from 'react'
import { Zoom } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { tableIconSx } from 'features/pack/components/packsList/packsTable/tableStyles'

type Props = {
  cardsCount: number
  packId: string
}

export const LearnPack: FC<Props> = ({ cardsCount, packId }) => {
  const navigate = useNavigate()
  const learnPack = () => navigate(`/learn/${packId}`)

  return (
    <>
      <Tooltip title={cardsCount === 0 ? '' : 'Learn cards'}
               arrow placement='top'
               TransitionComponent={Zoom}
               TransitionProps={{ timeout: 400 }}>
        <span>
          <IconButton disabled={cardsCount === 0}
                      onClick={learnPack}
                      sx={tableIconSx}>
          <div><PlayCircleOutlinedIcon /></div>
        </IconButton>
        </span>
      </Tooltip>
    </>
  )
}