import s from './style.module.scss'
import { BackLink } from 'common/components/backLink/BackLink'
import * as React from 'react'
import { InputSearchCards } from 'features/cards/components/cardsPage/inputSearchCards/inputSearchCards'
import { CardsTable } from 'features/cards/components/cardsPage/cardsTable/CardsTable'
import { PaginationCards } from 'features/cards/components/cardsPage/paginationCards/paginationCards'
import { SkeletonCardsPage } from 'features/cards/components/cardsPage/skeletonCardsPage/SkeletonCardsPage'
import { useGetCards } from 'features/cards/hooks/useGetCards'
import { TitleBlockCards } from 'features/cards/components/cardsPage/titleBlockCards/titleBlockCards'


export const CardsPage = () => {
  const {isLoading} = useGetCards()

  if (isLoading) return <SkeletonCardsPage />


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
