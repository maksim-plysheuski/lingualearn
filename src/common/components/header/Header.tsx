import s from 'common/components/header/Header.module.scss'

import { Link, useNavigate } from 'react-router-dom'
import React, { useCallback } from 'react'
import { AvatarMenu } from 'common/components/avatarMenu/AvatarMenu'
import { useAppSelector } from 'common/hooks'
import { paths } from 'common/router'
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined'
import { isLoggedInSelect } from 'features/auth/selectors'
import { SuperButton } from '../superButton/SuperButton'

export const Header = () => {
  const isLoggedIn = useAppSelector(isLoggedInSelect)
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