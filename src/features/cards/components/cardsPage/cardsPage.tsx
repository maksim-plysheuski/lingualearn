import s from 'features/cards/components/cardsPage/style.module.scss'
import { BackLink } from 'common/components/backLink/BackLink'
import { TitleBlockCards } from './titleBlockCards/titleBlockCards'
import { useFetchCards } from 'features/cards/service'
import { InputSearchCards } from './inputSearchCards/inputSearchCards'
import React from 'react'
import { CardsTable } from 'features/cards/components/cardsPage/cardsTable/CardsTable'
import { PaginationCards } from 'features/cards/components/cardsPage/paginationCards/paginationCards'

export const CardsPage = () => {
  const { data, isLoading } = useFetchCards()
  if (isLoading) return <h1>loading</h1>

  return (
    <div className={s.packsList}>
      <BackLink />
      <TitleBlockCards />
      <InputSearchCards />
      {data?.cards.length === 0 ?
        <h1 style={{ color: '#fff' }}>карточек не найдено </h1> : <><CardsTable /><PaginationCards /></>}
    </div>
  )
}
