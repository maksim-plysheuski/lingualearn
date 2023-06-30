import LogoutIcon from '@mui/icons-material/Logout'
import s from 'features/profile/components/ProfilePage.module.scss'
import { EditableTitle } from 'common/components/editableTitle/EditableTitle'
import { UniversalButton } from 'common/components/universalButton/UniversalButton'
import { Avatar, Badge, IconButton } from '@mui/material'
import LocalSeeOutlinedIcon from '@mui/icons-material/LocalSeeOutlined'
import { ChangeEvent } from 'react'
import { authThunks } from 'features/auth/auth.slice'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { BackLink } from 'common/components/backLink/BackLink'
import { ProfileAva } from './profileAva/ProfileAva'


export const ProfilePage = () => {
  const dispatch = useAppDispatch()
  const profile = useAppSelector(state => state.profile.profile)

  const logoutHandler = () => {
    dispatch(authThunks.logout())
  }

  return (
    <div className={s.profilePage}>
      <BackLink />
      <div className={s.personalInfoBlock}>
        <h1>Personal Information</h1>
        <ProfileAva />
        <EditableTitle userName={profile ? profile.name : 'Username'} />
        <span className={s.emailSpan}>{profile ? profile.email : 'user@mail.com'}</span>
        <UniversalButton title={'Log out'} width={'127'} icon={<LogoutIcon />} onClickCallback={logoutHandler} />
      </div>
    </div>
  )
}