import LogoutIcon from '@mui/icons-material/Logout'
import s from 'features/profile/components/profile/components/ProfilePage.module.scss'
import { EditableTitle } from 'common/components/editableTitle/EditableTitle'
import { SuperButton } from 'common/components/superButton/SuperButton'
import { authThunks } from 'features/profile/profile.slice'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { BackLink } from 'common/components/backLink/BackLink'
import { ProfileAva } from 'features/profile/components/profile/components/profileAva/ProfileAva'
import { userEmailSelect, userNameSelect } from 'features/profile/select/profile.select'


export const ProfilePage = () => {
  const dispatch = useAppDispatch()
  const userEmail = useAppSelector(userEmailSelect)
  const userName = useAppSelector(userNameSelect)

  const logoutHandler = () => {
    dispatch(authThunks.logout())
  }

  return (
    <div className={s.profilePage}>
      <BackLink />
      <div className={s.personalInfoBlock}>
        <h1>Personal Information</h1>
        <ProfileAva />
        <EditableTitle userName={userName ? userName : 'Username'} />
        <span className={s.emailSpan}>{userEmail ? userEmail : 'user@mail.com'}</span>
        <SuperButton title={'Log out'} width={'127'} icon={<LogoutIcon />} onClick={logoutHandler} />
      </div>
    </div>
  )
}