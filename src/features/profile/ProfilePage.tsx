import LogoutIcon from '@mui/icons-material/Logout'
import s from 'features/profile/ProfilePage.module.scss'
import { EditableTitle } from 'common/components/editableTitle/EditableTitle'
import { UniversalButton } from 'common/components/universalButton/UniversalButton'
import { Avatar, Badge, IconButton } from '@mui/material'
import LocalSeeOutlinedIcon from '@mui/icons-material/LocalSeeOutlined'
import { ChangeEvent } from 'react'
import { authThunks } from 'features/auth/auth.slice'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { BackLink } from 'common/components/backLink/BackLink'


export const ProfilePage = () => {
  const dispatch = useAppDispatch()
  const profile = useAppSelector(state => state.profile.profile)

  const onChangeAvatarHandler = (event: ChangeEvent<HTMLInputElement>) => {
    //need to fix
  }

  const logoutHandler = () => {
    dispatch(authThunks.logout())
  }

  return (
    <div className={s.profilePage}>
      <BackLink />
      <div className={s.personalInfoBlock}>
        <h1>Personal Information</h1>
        <div className={s.userPhotoContainer}>
          <Badge
            overlap={'circular'}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
              <IconButton
                component={'label'}
                disableRipple={true}
                sx={{ width: '30px', height: '30px', border: '1px solid #fff', bgcolor: '#808080'}}
              >
                <LocalSeeOutlinedIcon sx={{ fontSize: '16px', color: '#FFF' }} />
                <input
                  type={'file'}
                  hidden
                  accept='image/*'
                  onChange={onChangeAvatarHandler}
                />
              </IconButton>
            }
          >
            <Avatar
              alt='user avatar'
              src={profile?.avatar}
              sx={{ width: '96px', height: '96px' }}
            />
          </Badge>
        </div>
        <EditableTitle userName={profile ? profile.name : 'Username'} />
        <span className={s.emailSpan}>{profile ? profile.email : 'user@mail.com'}</span>
        <UniversalButton title={'Log out'}
                         width={'127'}
                         icon={<LogoutIcon />}
                         onClickCallback={logoutHandler}
        />
      </div>
    </div>
  )
}