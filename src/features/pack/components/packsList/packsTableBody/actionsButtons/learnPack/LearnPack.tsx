import IconButton from '@mui/material/IconButton'
import { Zoom } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined'
import { FC } from 'react'
import { iconStyle } from 'features/pack/components/packsList/packsTableBody/actionsButtons/editPack/EditPack'
import { useNavigate } from 'react-router-dom'

type Props = {
  cardsCount: number
  packId: string
}

export const LearnPack: FC<Props> = ({ cardsCount, packId }) => {
  const navigate = useNavigate()
  const learnPack = async () => {
    navigate(`/learn/${packId}`)
  }

  return (
    <>
      <Tooltip title={cardsCount === 0 ? '' : 'Learn'} arrow placement='top' TransitionComponent={Zoom}
               TransitionProps={{ timeout: 400 }}>
        <span>
          <IconButton disabled={cardsCount === 0} onClick={learnPack} sx={iconStyle}>
          <div><PlayCircleOutlinedIcon /></div>
          </IconButton>
        </span>
      </Tooltip>
    </>
  )
}