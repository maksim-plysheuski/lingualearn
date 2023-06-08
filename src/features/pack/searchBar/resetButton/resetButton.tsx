import React from 'react'
import resetIcon from './icon/Filter-Remove.svg'
import s from './style.module.scss'
import { useSearchCards } from 'features/pack/hook/useSearchCards'


export const ResetButton = () => {
  const { resetSearchParams } = useSearchCards()
  return (
    <div className={s.container}
         onClick={resetSearchParams}
    >
      <img src={resetIcon} alt='reset' className={s.icon} />
    </div>
  )
}

