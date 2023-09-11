import s from './style.module.scss'
import { BackLink } from 'common/components/backLink/BackLink'
import * as React from 'react'
import { CardsTable } from 'features/cards/components/cardsPage/cardsTable/CardsTable'
import { PaginationCards } from 'features/cards/components/cardsPage/paginationCards/paginationCards'
import { TitleBlockCards } from 'features/cards/components/cardsPage/titleBlockCards/titleBlockCards'
import { InputSearchCards } from 'features/cards/components/cardsPage/inputSearchCards/inputSearchCards'



export const CardsPage = () => {

  return (
    <div className={s.packsList}>
      <BackLink />
      <TitleBlockCards />
      <InputSearchCards />
      <CardsTable />
      <PaginationCards />
    </div>
  )
}
