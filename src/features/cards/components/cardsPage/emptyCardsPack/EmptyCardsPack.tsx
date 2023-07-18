import React from 'react'
import s from './style.module.scss'
import { AddCardsModal } from 'features/cards/components/modal/addCard/addCardModal/AddCardsModal'
import { useFetchCards } from 'features/cards/service'


export const EmptyCardsPack = () => {
  const { data } = useFetchCards()
  return(
    <div className={s.container}>
      <h2>{data?.packName}</h2>
      <span>This pack is empty. Click add new card to fill this pack.</span>
      <AddCardsModal />
    </div>
  )
}