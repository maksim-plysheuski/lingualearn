import s from 'features/cards/components/cardsPage/style.module.scss'
import { PageTitleBlock } from 'common/components/pageTitleBlock/PageTitleBlock'
import { CardsTable } from 'features/cards/components/cardsPage/cardsTable/CardsTable'
import { useAppDispatch, useAppSelector } from 'common/hooks'

import { BackLink } from 'common/components/backLink/BackLink'
import * as React from 'react'
import { useEffect } from 'react'
import { cardsThunks } from 'features/cards/cards.slice'
import { useSearchCards } from 'features/cards/hooks/useSearchCards'

export const CardsPage = () => {
  const { params, cardsPack_id } = useSearchCards()
  const dispatch = useAppDispatch()

  useEffect(() => {
    debugger
    dispatch(cardsThunks.getCards({ cardsPack_id: params.cardsPack_id ?? cardsPack_id }))
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

  return (
    <div className={s.packsList}>
      <BackLink />
      <PageTitleBlock showButton={true}
                      buttonTitle={'Learn cards'}
      />
      {/*<InputSearch nameSearch={cardQuestion!} searchCallback={setPackParamQuestion} width={'1008px'}/>*/}
      <CardsTable />
      {/*<Paginator currentPage={currentPage}*/}
      {/*           itemsPerPage={cardsPerPage}*/}
      {/*           itemsTotalCount={cardsTotalCount}*/}
      {/*           itemsTitle={'cards'} />*/}
    </div>
  )
}
