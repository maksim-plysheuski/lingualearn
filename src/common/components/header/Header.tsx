import s from 'common/components/header/Header.module.scss'
import logo from 'common/assets/images/projectLogo.svg'
import { UniversalButton } from 'common/components/button/UniversalButton'
import { useNavigate } from 'react-router-dom'
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
        <a href='/' className={s.logoBlock}>
          <img src={logo} alt='' />
          <span>Lingualearn</span>
        </a>
        {isLoggedIn ? <AvatarMenu /> :
          <UniversalButton title='Sign Up'
                           rounded={true}
                           textColor={'white'}
                           width={'100'}
                           onClickCallback={singUpCallback} />}
      </div>
    </header>
  )
}