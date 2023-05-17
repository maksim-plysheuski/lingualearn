import React from 'react'
import resetIcon from './icon/Filter-Remove.svg'
import s from './style.module.scss'

export const ResetButton = () => {
  return (
    <div className={s.container}>
      <img src={resetIcon} alt='reset' className={s.icon} />
    </div>
  )
}

