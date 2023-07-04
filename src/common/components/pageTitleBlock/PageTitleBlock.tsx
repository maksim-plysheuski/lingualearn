import s from './style.module.scss'
import * as React from 'react'
import { AddPackModal } from 'features/pack/modal/addPackModal/addPackModal'
import { useAppSelector } from 'common/hooks'


export const PageTitleBlock = () => {
  const packParamsUserId = useAppSelector(state => state.sortPackSlice.packParams.user_id)

  return (
    <div className={s.addPackBlock}>
      <h2>Packs</h2>
      <AddPackModal />
    </div>
  )
}