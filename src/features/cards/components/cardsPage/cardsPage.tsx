import s from 'features/cards/components/cardsPage/style.module.scss'
import { BackLink } from 'common/components/backLink/BackLink'
import { TitleBlockCards } from './titleBlockCards/titleBlockCards'
import { useFetchCards } from 'features/cards/service'
import { InputSearchCards } from './inputSearchCards/inputSearchCards'
import React from 'react'
import { CardsTable } from 'features/cards/components/cardsPage/cardsTable/CardsTable'
import { PaginationCards } from 'features/cards/components/cardsPage/paginationCards/paginationCards'
import { EmptyCardsPack } from 'features/cards/components/cardsPage/emptyCardsPack/EmptyCardsPack'

export const CardsPage = () => {
  const { data, isLoading } = useFetchCards()
  if (isLoading) return <h1>loading</h1>

  return (
    <div className={s.packsList}>
      <BackLink />
      {data?.cards.length
        ? <>
          <TitleBlockCards />
          <InputSearchCards />
          <CardsTable />
          <PaginationCards />
        </>
        : <EmptyCardsPack />
      }
    </div>
  )
}
