import { Paginator } from 'common/components/paginator/Paginator'
import s from 'features/cards/cardsPage/style.module.scss'
import { PageTitleBlock } from 'common/components/PageTitleBlock/PageTitleBlock'
import { CardsTable } from 'features/cards/cardsPage/cardsTable/CardsTable'
import { InputSearch } from 'common/components/Inputs/inputSearch/InputSearch'
import { useAppDispatch, useAppSelector } from 'common/hooks'


export const CardsPage = () => {
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
      <PageTitleBlock pageTitle={'Friend\'s Pack'}
                      showButton={true}
                      buttonTitle={'Learn cards'}
                      buttonCallback={learnPack}/>
      {/*<InputSearch nameSearch={cardQuestion!} searchCallback={setPackParamQuestion} width={'1008px'}/>*/}
      <CardsTable />
      <Paginator currentPage={currentPage}
                 itemsPerPage={cardsPerPage}
                 itemsTotalCount={cardsTotalCount}
                 itemsTitle={'cards'} />
    </div>
  )
}
