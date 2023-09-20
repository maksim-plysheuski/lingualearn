import s from './style.module.scss'
import { BackLink } from 'common/components/backLink/BackLink'
import * as React from 'react'
import { CardsTable } from 'features/cards/components/cardsPage/cardsTable/CardsTable'
import { PaginationCards } from 'features/cards/components/cardsPage/paginationCards/paginationCards'
import { TitleBlockCards } from 'features/cards/components/cardsPage/titleBlockCards/titleBlockCards'
import { InputSearchCards } from 'features/cards/components/cardsPage/inputSearchCards/inputSearchCards'
import { useFetchCards } from 'features/cards/hooks/useFetchCards'
import { EmptyCardsPack } from 'features/cards/components/cardsPage/emptyCardsPack/EmptyCardsPack'
import { Preloader } from 'features/cards/components/cardsPage/preloader/Preloader'


export const CardsPage = () => {
  const { data, isLoading } = useFetchCards()

  if (isLoading) return <Preloader/>

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
