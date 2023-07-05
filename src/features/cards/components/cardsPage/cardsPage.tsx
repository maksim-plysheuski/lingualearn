import s from 'features/cards/components/cardsPage/style.module.scss'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { BackLink } from 'common/components/backLink/BackLink'
import * as React from 'react'
import { useEffect } from 'react'
import { cardsThunks } from 'features/cards/cards.slice'
import { TitleBlockCards } from 'features/cards/components/cardsPage/titleBlockCards/titleBlockCards'
import { InputSearchCards } from 'features/cards/components/cardsPage/inputSearchCards/inputSearchCards'
import { CardsTable } from 'features/cards/components/cardsPage/cardsTable/CardsTable'
import { PaginationCards } from 'features/cards/components/cardsPage/paginationCards/paginationCards'
import { selectCards } from 'features/cards/selectors'
import { useParams } from 'react-router-dom'

export const CardsPage = () => {
  const { id } = useParams<{ id: string }>()
  const cards = useAppSelector(selectCards)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(cardsThunks.fetchCards({ cardsPack_id: id! }))
  }, [])

  if (!cards) return <h1>loading</h1>
  return (
    <div className={s.packsList}>
      <BackLink />
      <TitleBlockCards />
      <InputSearchCards />
      {cards.length === 0 ? <h1>карточек не найдено </h1> : <CardsTable />}
      <PaginationCards />
    </div>
  )
}
