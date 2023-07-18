import s from 'features/pack/components/packsList/titleBlock/style.module.scss'
import * as React from 'react'
import {AddPackModal} from 'features/pack/modal/addPackModal/addPackModal'

export const TitleBlock = () => {
  return (
    <div className={s.addPackBlock}>
      <h2>Packs List</h2>
      <AddPackModal />
    </div>
  )
}