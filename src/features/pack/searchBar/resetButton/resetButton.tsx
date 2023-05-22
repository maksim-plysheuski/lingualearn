import React from 'react'
import resetIcon from './icon/Filter-Remove.svg'
import s from './style.module.scss'
import { useAppDispatch } from 'common/hooks'
import { packAction } from 'features/pack/packs.slice'

export const ResetButton = () => {
  const dispatch = useAppDispatch()
  const resetParams = {
    packName : '',
    sortPacks : '',
  }
  const resetPacksParams = () => {
    dispatch(packAction.setPackParams(resetParams))
  }
  return (
    <div className={s.container}
         onClick={resetPacksParams}
    >
      <img src={resetIcon} alt='reset' className={s.icon} />
    </div>
  )
}

