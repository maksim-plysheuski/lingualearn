import React from 'react'
import notFoundImage from 'common/components/pageNotFound/errorImage.svg'
import { useNavigate } from 'react-router-dom'
import { SuperButton } from 'common/components/superButton/SuperButton'
import { paths } from 'common/router'
import s from './style.module.scss'
import { AppHeader } from 'common/components/appHeader/AppHeader'

export const PageNotFound = () => {
  const navigate = useNavigate()
  return (
    <>
      <AppHeader />
      <div className={s.pageContainer}>
        <img src={notFoundImage} alt='Page not found' />
        <span>Sorry! Page not found!</span>
        <SuperButton title={'Back to home page'} width={'177'} onClick={() => navigate(paths.PACKS)} />
      </div>
    </>
  )
}
