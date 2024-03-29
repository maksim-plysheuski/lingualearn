import LogoutIcon from '@mui/icons-material/Logout'
import s from 'features/auth/components/profile/ProfilePage.module.scss'
import { EditableTitle } from 'common/components'
import { authThunks } from 'features/auth/index'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { ProfileAva } from 'features/auth/components/profile/profileAva/ProfileAva'
import { selectIsAppLoading } from 'app'
import { selectUserProfile } from 'features/auth/selectors'
import { SuperButton } from 'common/components'


export const ProfilePage = () => {
  const dispatch = useAppDispatch()
  const profile = useAppSelector(selectUserProfile)
  const isLoading = useAppSelector(selectIsAppLoading)

  const logoutHandler = () => dispatch(authThunks.logout())

  return (
    <div className={s.profilePage}>
      <div className={s.profileContainer}>
        <h1>Personal Information</h1>
        <ProfileAva />
        <EditableTitle userName={profile?.name} />
        <div className={s.infoBlock}>
          <span>Total public packs: <b>{profile?.publicCardPacksCount}</b></span>
          <span>Account was created: <b>{profile?.created.slice(0, 10).split('-').reverse().join('.')}</b></span>
          <span>{profile?.email}</span>
        </div>
        <SuperButton title={'Log out'} width={'127'} icon={<LogoutIcon />}
                     isGrayColor={true} onClick={logoutHandler} disabled={isLoading} />
      </div>
    </div>
  )
}