import s from 'common/components/Header/Header.module.scss'
import logo from 'common/components/Header/projectLogo.svg'
import { UniversalButton } from 'common/components/Button/UniversalButton'
import { Outlet, useNavigate } from 'react-router-dom'
import React from 'react'

export const Header = () => {
  const navigate = useNavigate()

  const singUpCallback = () => navigate('/registration')

  return (
    <>
      <header className={s.header}>
        <div className={s.headerContainer}>
          <a href='/' className={s.logoBlock}>
            <img src={logo} alt='' />
            <span>Lingualearn</span>
          </a>
          <UniversalButton title='Sign Up' onClickCallback={singUpCallback} />
        </div>
      </header>
      <Outlet />
    </>

  )
}