import LogoutIcon from '@mui/icons-material/Logout'
import s from './ProfilePage.module.scss'
import { EditableTitle } from 'common/components/editableTitle/EditableTitle'
import { SuperButton } from 'common/components/superButton/SuperButton'
import { authThunks } from 'features/auth/auth.slice'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { BackLink } from 'common/components/backLink/BackLink'
import { ProfileAva } from './profileAva/ProfileAva'
import { loadingSelect } from 'app'


export const ProfilePage = () => {
  const dispatch = useAppDispatch()
  const profile = useAppSelector(state => state.profile.profile)
  const isLoading = useAppSelector(loadingSelect)

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
        <SuperButton title={'Log out'} width={'127'} icon={<LogoutIcon />} isGrayColor={true}
                     onClickCallback={logoutHandler} isLoading={isLoading} />
      </div>
    </div>
  )
}