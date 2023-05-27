import s from 'common/components/header/Header.module.scss'
import logo from 'common/assets/images/projectLogo.svg'
import { UniversalButton } from 'common/components/button/UniversalButton'
import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import { AvatarMenu } from 'common/components/avatarMenu/AvatarMenu'
import { useAppSelector } from 'common/hooks'
import { paths } from 'common/router/path'

export const Header = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
  const navigate = useNavigate()
  const singUpCallback = () => navigate(paths.REGISTER)

  return (
    <header className={s.header}>
      <div className={s.headerContainer}>
        <Link to={isLoggedIn ? paths.PACKS : '/'} className={s.logoBlock}>
          <img src={logo} alt='logo' />
          <span>Lingualearn</span>
        </Link>
        {isLoggedIn ? <AvatarMenu /> :
          <UniversalButton title='Sign Up'
                           rounded={true}
                           textColor={'white'}
                           width={'100'}
                           height={'30'}
                           onClickCallback={singUpCallback} />}
      </div>
    </header>
  )
}