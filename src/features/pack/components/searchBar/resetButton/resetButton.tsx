import React from 'react'
import resetIcon from 'features/pack/components/searchBar/resetButton/icon/Filter-Remove.svg'
import s from 'features/pack/components/searchBar/resetButton/style.module.scss'
import { useSearchPaks } from 'features/pack/hook/useSearchPaks'


export const ResetButton = () => {
  const { resetSearchParams } = useSearchPaks()
  return (
    <div className={s.container}
         onClick={resetSearchParams}
    >
      <img src={resetIcon} alt='reset' className={s.icon} />
    </div>
  )
}

