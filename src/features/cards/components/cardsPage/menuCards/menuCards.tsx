import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { AddEditCardsModal } from '../../modal/addEditCard/addEditCardModal/AddEditCardsModal'


export const MenuCards = () => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const editCardHandler = () => {
    handleClose()
  }

  return (
    <div>
      <div onClick={handleClick}
           aria-controls={open ? 'account-menu' : undefined}
           aria-haspopup='true'
           aria-expanded={open ? 'true' : undefined}
      >
        <MoreVertIcon sx={{ margin: 'auto' }} />
      </div>
      <Menu anchorEl={anchorEl}
            id='account-menu'
            open={open}
            onClose={handleClose}
        // onClick={handleClose}
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
        <MenuItem>
          <PlayCircleOutlineIcon /> Learn
        </MenuItem>
        <Divider />
        <MenuItem>
          <AddEditCardsModal title={'Edit Card'}
                             callback={editCardHandler}
                             fieldOpen={<><DriveFileRenameOutlineIcon />Edit</>}
          />
        </MenuItem>
        <Divider />
        <MenuItem>
          <DeleteOutlineIcon /> Delete
        </MenuItem>
      </Menu>
    </div>
  )
}
