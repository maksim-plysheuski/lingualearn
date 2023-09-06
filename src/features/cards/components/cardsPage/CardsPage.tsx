import s from './style.module.scss'
import { BackLink } from 'common/components/backLink/BackLink'
import * as React from 'react'
import { CardsTable } from 'features/cards/components/cardsPage/cardsTable/CardsTable'
import { PaginationCards } from 'features/cards/components/cardsPage/paginationCards/paginationCards'
import { SkeletonCardsPage } from 'features/cards/components/cardsPage/skeletonCardsPage/SkeletonCardsPage'
import { useGetCards } from 'features/cards/hooks/useGetCards'
import { TitleBlockCards } from 'features/cards/components/cardsPage/titleBlockCards/titleBlockCards'
import { EmptyCardsPack } from 'features/cards/components/cardsPage/emptyCardsPack/EmptyCardsPack'
import { useAppSelector } from 'common/hooks'
import { selectIsAppLoading } from 'app'


export const CardsPage = () => {
  const isAppLoading = useAppSelector(selectIsAppLoading)
  const {data} = useGetCards()

  if (isAppLoading) return <SkeletonCardsPage />

  return (
    <div className={s.packsList}>
        <BackLink />
        {/*<InputSearchCards />*/}
      {
        data?.cardsTotalCount
        ? <>
            <TitleBlockCards />
            <CardsTable />
            <PaginationCards />
          </>
        : <EmptyCardsPack />
      }


    </div>
  )
}
