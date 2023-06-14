import s from 'features/cards/components/cardsPage/style.module.scss'
import { PageTitleBlock } from 'common/components/pageTitleBlock/PageTitleBlock'
import { CardsTable } from 'features/cards/components/cardsPage/cardsTable/CardsTable'
import { useAppDispatch } from 'common/hooks'

import { BackLink } from 'common/components/backLink/BackLink'
import * as React from 'react'
import { useEffect } from 'react'
import { cardsThunks } from 'features/cards/cards.slice'
import { useSearchCards } from 'features/cards/hooks/useSearchCards'
import { InputSearchCards } from 'features/cards/components/inputSearchCards/inputSearchCards'
import { PaginationCards } from 'features/cards/components/paginationCards/paginationCards'

export const CardsPage = () => {
  const { params, cards } = useSearchCards()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!Object.keys(params).length || !!cards) return
    dispatch(cardsThunks.fetchCards({ cardsPack_id: params.cardsPack_id, ...params }))
  }, [])

  if (!cards) return <h1>louding</h1>

  return (
    <div className={s.packsList}>
      <BackLink />
      <PageTitleBlock showButton={true}
                      buttonTitle={'Learn cards'}
      />
      <InputSearchCards />
      <CardsTable />
      <PaginationCards />
    </div>
  )
}
