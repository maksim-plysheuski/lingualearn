import s from './style.module.scss'
import { BackLink } from 'common/components/backLink/BackLink'
import * as React from 'react'
import { InputSearchCards } from 'features/cards/components/cardsPage/inputSearchCards/inputSearchCards'
import { CardsTable } from 'features/cards/components/cardsPage/cardsTable/CardsTable'
import { PaginationCards } from 'features/cards/components/cardsPage/paginationCards/paginationCards'
import { SkeletonCardsPage } from 'features/cards/components/cardsPage/skeletonCardsPage/SkeletonCardsPage'
import { useAppSelector } from 'common/hooks'
import { selectIsAppLoading } from 'app'
import { useGetCards } from 'features/cards/hooks/useGetCards'
import { EmptyCardsPack } from 'features/cards/components/cardsPage/emptyCardsPack/EmptyCardsPack'

export const CardsPage = () => {
  const isAppLoading = useAppSelector(selectIsAppLoading)
  const { data } = useGetCards()

  if (isAppLoading) return <SkeletonCardsPage />

  return (
    <div className={s.packsList}>
      {data?.cards.length
        ? <>
          <BackLink />
          {/*<TitleBlockCards />*/}
          <InputSearchCards />
          <CardsTable />
          <PaginationCards />
        </>
        : <EmptyCardsPack />
      }
    </div>
  )
}
