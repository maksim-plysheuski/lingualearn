import { AddCardsModal } from 'features/cards/components/modal/addCardModal/addCardModal/AddCardsModal'
import React from 'react'
import s from './style.module.scss'


export const EmptyCardsPack = () => {

  return(
    <div className={s.container}>
      <h2>{"packName"}</h2>
      <span>This pack is empty. Click add new card to fill this pack.</span>
      <AddCardsModal />
    </div>
  )
}