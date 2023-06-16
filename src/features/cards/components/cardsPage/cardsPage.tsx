import s from 'features/cards/components/cardsPage/style.module.scss'
import { useAppDispatch } from 'common/hooks'
import { BackLink } from 'common/components/backLink/BackLink'
import * as React from 'react'
import { useEffect } from 'react'
import { cardsThunks } from 'features/cards/cards.slice'
import { useSearchCards } from 'features/cards/hooks/useSearchCards'
import { Cards } from 'features/cards/components/cardsPage/cards'

export const CardsPage = () => {

  const { params, cards } = useSearchCards()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!Object.keys(params).length || !!cards) return
    dispatch(cardsThunks.fetchCards({ cardsPack_id: params.cardsPack_id, ...params }))
  }, [])

  return (
    <div className={s.packsList}>
      <BackLink />
      <Cards />
    </div>
  )
}
