import s from './style.module.scss'
import * as React from 'react'
import { AddPackModal } from 'features/pack/components/modal/addPackModal/addPackModal'


export const TitleBlockPacks = () => {
  return (
    <div className={s.addPackBlock}>
      <h2>Packs List</h2>
      <AddPackModal />
    </div>
  )
}