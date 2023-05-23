import React from 'react'
import resetIcon from './icon/Filter-Remove.svg'
import s from './style.module.scss'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { packAction } from 'features/pack/packs.slice'
import { TGetPacksArg } from 'features/pack/packApi'

export const ResetButton = () => {
  const dispatch = useAppDispatch()

  const minCountPacks = useAppSelector(state => state.packs.packs.minCardsCount)
  const maxCountPacks = useAppSelector(state => state.packs.packs.maxCardsCount)

  const resetParams: TGetPacksArg = {
    packName: '',
    sortPacks: '',
    min: minCountPacks,
    max: maxCountPacks
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

