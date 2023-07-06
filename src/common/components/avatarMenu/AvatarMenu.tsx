import * as React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import Logout from '@mui/icons-material/Logout'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { useNavigate } from 'react-router-dom'
import { paths } from 'common/router/path'
import { authThunks } from 'features/auth/auth.slice'


export const AvatarMenu = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const userName = useAppSelector(state => state.profile.profile?.name)
  const profile = useAppSelector(state => state.profile.profile)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleProfileButton = () => {
    navigate(paths.PROFILE)
  }

  const handleLogoutButton = () => {
    dispatch(authThunks.logout())
  }

  const style = {
    '& .MuiPaper-root': {
      bgcolor: '#171717',
      border: '1px solid #333333',
      marginTop: 1,
      minWidth: 180,
      color: '#fff',
      '& .MuiMenu-list': {
        padding: '4px 0'
      },
      '& .MuiMenuItem-root': {
        '&:hover': {
          bgcolor: '#333333'
        },
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: '#fff',
          marginRight: 1
        }
      }
    }
  }

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'right' }}>
        <Typography sx={{ minWidth: 100, color: 'white' }}>
          {userName}
        </Typography>
        <Tooltip title='Account settings'>
          <IconButton
            onClick={handleClick}
            size='small'
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }} src={profile?.avatar} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        sx={style}
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleProfileButton}>
          <Avatar src={profile?.avatar} /> {userName}

        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogoutButton}>
          <ListItemIcon>
            <Logout fontSize='small' />
          </ListItemIcon>
          Sign Out
        </MenuItem>
      </Menu>
    </React.Fragment>
  )
}