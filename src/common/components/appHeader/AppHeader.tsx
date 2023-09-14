import s from './style.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import React, { useCallback } from 'react'
import { AvatarMenu } from './avatarMenu/AvatarMenu'
import { useAppSelector } from 'common/hooks'
import { paths } from 'common/router'
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined'
import { selectIsLoggedIn } from 'features/auth/selectors'
import { SuperButton } from 'common/components/superButton/SuperButton'

export const AppHeader = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn)
  const navigate = useNavigate()
  const singUpCallback = useCallback(() => navigate(paths.LOGIN), [])

  return (
    <header className={s.header}>
      <div className={s.headerContainer}>
        <Link to={isLoggedIn ? paths.PACKS : paths.LOGIN} className={s.logoBlock}>
          <StyleOutlinedIcon sx={{ color: '#e66300' }} fontSize={'large'} />
          <span>LinguaLearn</span>
        </Link>
        {isLoggedIn ? <AvatarMenu /> :
          <SuperButton title='Sign Up' width={'90'} onClick={singUpCallback} disabled={false} />}
      </div>
    </header>
  )
}