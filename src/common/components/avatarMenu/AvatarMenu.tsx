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
import { path } from 'common/router/path'
import { authThunks } from 'features/profile/profile.slice'
import { userAvatarSelect, userEmailSelect, userNameSelect } from 'features/profile'
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'
import s from 'common/components/avatarMenu/style.module.scss'
import { useState, MouseEvent } from 'react'
import { menuStyle, paperStyle } from './style'

export const AvatarMenu = () => {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const userName = useAppSelector(userNameSelect)
  const userAvatar = useAppSelector(userAvatarSelect)
  const userEmail = useAppSelector(userEmailSelect)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClickMenu = (event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)
  const handleCloseMenu = () => setAnchorEl(null)
  const openProfilePage = () => navigate(path.PROFILE)
  const openPacksPage = () => navigate(path.PACKS)
  const logout = () => dispatch(authThunks.logout())

  return (
    <>
      <div className={s.headerAvaContainer}>
        <span>{userName}</span>
        <Tooltip title='Account menu'>
          <IconButton onClick={handleClickMenu}>
            <Avatar src={userAvatar} />
          </IconButton>
        </Tooltip>
      </div>
      <Menu sx={menuStyle} anchorEl={anchorEl} id='account-menu' open={open}
            onClose={handleCloseMenu} onClick={handleCloseMenu} PaperProps={paperStyle}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
        <div className={s.userInfoContainer}>
          <Avatar src={userAvatar} />
          <div className={s.userInfo}>
            <h3>{userName}</h3>
            <span>{userEmail}</span>
          </div>
        </div>
        <Divider />
        <MenuItem onClick={openProfilePage}>
          <ListItemIcon>
            <PermIdentityOutlinedIcon />
          </ListItemIcon>My Profile
        </MenuItem>
        <Divider />
        <MenuItem onClick={openPacksPage}>
          <ListItemIcon>
            <FeaturedPlayListOutlinedIcon />
          </ListItemIcon>Packs List
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