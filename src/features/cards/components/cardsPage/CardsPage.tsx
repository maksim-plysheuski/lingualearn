import s from 'features/cards/components/cardsPage/style.module.scss'
import { PageTitleBlock } from 'common/components/pageTitleBlock/PageTitleBlock'
import { CardsTable } from 'features/cards/components/cardsPage/cardsTable/CardsTable'
import { useAppDispatch, useAppSelector } from 'common/hooks'

import { BackLink } from 'common/components/backLink/BackLink'
import * as React from 'react'
import { useEffect } from 'react'
import { cardsThunks } from 'features/cards/cards.slice'
import { useSearchCards } from 'features/cards/hooks/useSearchCards'
import { InputSearchCards } from 'features/cards/components/inputSearchCards/inputSearchCards'

export const CardsPage = () => {

  const { params, cards } = useSearchCards()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!Object.keys(params).length || !!cards) return
    dispatch(cardsThunks.fetchCards({ cardsPack_id: params.cardsPack_id, ...params }))
  }, [])


  const currentPage = useAppSelector(state => state.cards.cards.page)
  const cardsTotalCount = useAppSelector(state => state.cards.cards.cardsTotalCount)
  const cardsPerPage = useAppSelector(state => state.cards.cards.pageCount)

  /*const cardQuestion = useAppSelector(state => state.cards.packParams.cardQuestion)
  const dispatch = useAppDispatch()

  const setPackParamQuestion= (cardQuestion: string) => {
    dispatch(cardsAction.setCardsParams({cardQuestion, cardsPack_id: ''}))
  }*/

  const learnPack = () => {
    //need to fix
  }
  if (!cards) return <h1>louding</h1>

  return (
    <div className={s.packsList}>
      <BackLink />
      <PageTitleBlock showButton={true}
                      buttonTitle={'Learn cards'}
      />
      <InputSearchCards />
      <CardsTable />
      {/*<Paginator currentPage={currentPage}*/}
      {/*           itemsPerPage={cardsPerPage}*/}
      {/*           itemsTotalCount={cardsTotalCount}*/}
      {/*           itemsTitle={'cards'} />*/}
    </div>
  )
}
