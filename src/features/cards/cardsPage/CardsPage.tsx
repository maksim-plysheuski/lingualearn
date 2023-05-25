import { Paginator } from 'common/components/paginator/Paginator'
import s from 'features/cards/cardsPage/style.module.scss'
import { PageTitleBlock } from 'common/components/PageTitleBlock/PageTitleBlock'
import { CardsTable } from 'features/cards/cardsPage/cardsTable/CardsTable'
import { InputSearch } from 'common/components/Inputs/inputSearch/InputSearch'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { useEffect } from 'react'
import { cardsAction, cardsThunks } from 'features/cards/cards.slice'


export const CardsPage = () => {
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
      <PageTitleBlock pageTitle={'Friend\'s Pack'}
                      showButton={true}
                      buttonTitle={'Learn card'}
                      buttonCallback={learnPack}/>
      {/*<InputSearch nameSearch={cardQuestion!} searchCallback={setPackParamQuestion} width={'1008px'}/>*/}
      <CardsTable />
      <Paginator />
    </div>
  )
}
