import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import { EditPackModal } from 'features/pack/modal/editPackModal/EditCardModal'
import { RemovePackModal } from 'features/pack/modal/removePackModal/removePackModal'
import { useNavigate } from 'react-router-dom'
import { useFetchCards } from 'features/cards/service'


export const MenuPacks = () => {
  const { packId } = useFetchCards()
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)

  const handleClose = () => setAnchorEl(null)

  return (
    <>
      <div onClick={handleClick}
           aria-controls={open ? 'account-menu' : undefined}
           aria-haspopup='true'
           aria-expanded={open ? 'true' : undefined}
      >
        <MoreVertIcon sx={{ margin: 'auto' }} />
      </div>
      <Menu anchorEl={anchorEl} id='account-menu' open={open} onClose={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                width: '120px',
                backgroundColor: '#171717',
                color: '#fff',
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 8,
                  width: 10,
                  height: 10,
                  bgcolor: '#171717',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0
                },
                '& .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root+.MuiDivider-root': {
                  backgroundColor: '#333333'
                }
              }
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => navigate(`/learn/${packId}`)}>
          <PlayCircleOutlineIcon /> Learn
        </MenuItem>
        <Divider />
        <MenuItem>
          <EditPackModal handleCloseMenu={handleClose} /> Edit
        </MenuItem>
        <Divider />
        <MenuItem>
          <RemovePackModal nameIcon={'Delete'} />
        </MenuItem>
      </Menu>
    </>
  )
}
