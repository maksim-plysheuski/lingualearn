import s from './style.module.scss'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { BackLink } from 'common/components/backLink/BackLink'
import * as React from 'react'
import { useEffect } from 'react'
import { cardsThunks } from 'features/cards/cards.slice'
import { useSearchCards } from 'features/cards/hooks/useSearchCards'
import { TitleBlockCards } from 'features/cards/components/cardsPage/titleBlockCards/titleBlockCards'
import { InputSearchCards } from 'features/cards/components/cardsPage/inputSearchCards/inputSearchCards'
import { CardsTable } from 'features/cards/components/cardsPage/cardsTable/CardsTable'
import { PaginationCards } from 'features/cards/components/cardsPage/paginationCards/paginationCards'
import { selectCards } from 'features/cards/selectors'
import { EmptyCardsPack } from 'features/cards/components/cardsPage/emptyCardsPack/EmptyCardsPack'
import { SkeletonCardsPage } from 'features/cards/components/cardsPage/skeletonCardsPage/SkeletonCardsPage'

export const CardsPage = () => {
  const { params } = useSearchCards()
  const cards = useAppSelector(selectCards)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!Object.keys(params).length || !!cards) return
    dispatch(cardsThunks.fetchCards({ cardsPack_id: params.cardsPack_id, ...params }))
  }, [])

  if (!cards) return <SkeletonCardsPage/>
  return (
    <div className={s.packsList}>
      <BackLink />
      {cards
        ? <>
          <TitleBlockCards />
          <InputSearchCards />
          <CardsTable />
          <PaginationCards />
        </>
        : <EmptyCardsPack />}
    </div>
  )
}
