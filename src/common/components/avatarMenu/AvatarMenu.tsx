import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Logout from '@mui/icons-material/Logout'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { useNavigate } from 'react-router-dom'
import { paths } from 'common/router/path'
import { authThunks } from 'features/auth/auth.slice'
import s from './style.module.scss'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'
import { menuStyle, paperStyle } from 'common/components/avatarMenu/style'


export const AvatarMenu = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const userName = useAppSelector(state => state.profile.profile?.name)
  const profile = useAppSelector(state => state.profile.profile)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClickMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)
  const handleCloseMenu = () => setAnchorEl(null)
  const openProfilePage = () => navigate(paths.PROFILE)
  const logout = () => dispatch(authThunks.logout())


  return (
    <>
      <div className={s.headerAvaContainer}>
        <span>{userName}</span>
        <Tooltip title='Account menu'>
          <IconButton onClick={handleClickMenu}>
            <Avatar src={profile?.avatar} />
          </IconButton>
        </Tooltip>
      </div>
      <Menu sx={menuStyle} anchorEl={anchorEl} id='account-menu' open={open}
            onClose={handleCloseMenu} onClick={handleCloseMenu} PaperProps={paperStyle}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
        <div className={s.userInfoContainer}>
          <Avatar src={profile?.avatar} />
          <div className={s.userInfo}>
            <h3>{userName}</h3>
            <span>{profile?.email}</span>
          </div>
        </div>
        <Divider />
        <MenuItem onClick={openProfilePage}>
          <ListItemIcon>
            <PermIdentityOutlinedIcon />
          </ListItemIcon>My Profile
        </MenuItem>
        <Divider />
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <Logout />
          </ListItemIcon>Sign Out
        </MenuItem>
      </Menu>
    </>
  )
}