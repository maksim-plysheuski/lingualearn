import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import { EditPackModal } from 'features/pack/components/modal/editPackModal/EditPackModal'
import { RemovePackModal } from 'features/pack/components/modal/removePackModal/removePackModal'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from 'common/hooks'
import { selectPackId } from 'features/cards/selectors'
import { menuStyle, paperStyle } from 'common/components/avatarMenu/style'
import IconButton from '@mui/material/IconButton'
import { tableIconSx } from 'common/style/tableStyles'


export const MenuPacks = () => {
  const navigate = useNavigate()
  const packId = useAppSelector(selectPackId)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton onClick={handleClick} sx={{ ...tableIconSx, padding: 0 }}>
        <MoreVertIcon sx={{ ml: 1, border: `2px solid white`, borderRadius: 50 }} />
      </IconButton>

      <Menu sx={menuStyle} anchorEl={anchorEl} id='account-menu'
            open={open} onClose={handleClose} PaperProps={paperStyle}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => navigate(`/learn/${packId}`)}>
          <PlayCircleOutlineIcon /> Learn
        </MenuItem>
        <Divider />
        <MenuItem>
          <EditPackModal nameIcon={'Edit'} handleCloseMenu={handleClose} />
        </MenuItem>
        <Divider />
        <MenuItem>
          <RemovePackModal nameIcon={'Delete'} />
        </MenuItem>
      </Menu>
    </>
  )
}
