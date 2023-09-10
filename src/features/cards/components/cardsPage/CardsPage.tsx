import s from './style.module.scss'
import { BackLink } from 'common/components/backLink/BackLink'
import * as React from 'react'
import { CardsTable } from 'features/cards/components/cardsPage/cardsTable/CardsTable'
import { PaginationCards } from 'features/cards/components/cardsPage/paginationCards/paginationCards'
import { TitleBlockCards } from 'features/cards/components/cardsPage/titleBlockCards/titleBlockCards'


export const CardsPage = () => {

  return (
    <div className={s.packsList}>
      <BackLink />
      {/*<InputSearchCards />*/}
      <TitleBlockCards />
      <CardsTable />
      <PaginationCards />


    </div>
  )
}
