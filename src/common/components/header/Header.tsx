import s from 'common/components/header/Header.module.scss'
import { SuperButton } from 'common/components/superButton/SuperButton'
import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import { AvatarMenu } from 'common/components/avatarMenu/AvatarMenu'
import { useAppSelector } from 'common/hooks'
import { paths } from 'common/router/path'
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';

export const Header = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
  const navigate = useNavigate()
  const singUpCallback = () => navigate(paths.REGISTER)

  return (
    <header className={s.header}>
      <div className={s.headerContainer}>
        <Link to={isLoggedIn ? paths.PACKS : '/'} className={s.logoBlock}>
          <StyleOutlinedIcon sx={{color: '#e66300'}} fontSize={'large'} />
          <span>Lingualearn</span>
        </Link>
        {isLoggedIn ? <AvatarMenu /> :
          <SuperButton title='Sign Up' width={'100px'} onClickCallback={singUpCallback} disabled={false} />}
      </div>
    </header>
  )
}