import React from 'react'
import { useSearchCards } from 'features/cards/hooks/useSearchCards'
import { InputSearchCards } from 'features/cards/components/inputSearchCards/inputSearchCards'
import { CardsTable } from 'features/cards/components/cardsTable/CardsTable'
import { PaginationCards } from 'features/cards/components/paginationCards/paginationCards'
import { TitleBlockCards } from 'features/cards/components/titleBlockCards/titleBlockCards'

export const Cards = () => {

  const { cards } = useSearchCards()

  if (!cards) return <h1>loading</h1>

  return (
    <>
      <TitleBlockCards />
      <InputSearchCards />
      {cards.length === 0 ? <h1>карточек не найдено </h1> : <CardsTable />}
      <PaginationCards />
    </>
  )
}

