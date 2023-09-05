import { useAppDispatch, useAppSelector } from 'common/hooks'
import { useSearchParams } from 'react-router-dom'
import {
} from 'features/cards/selectors'
import { setCardsParams } from 'features/cards/service/cards.params.slice'
import { useGetCards } from 'features/cards/hooks/useGetCards'


type TSearch = {
  id?: string
  cardQuestion?: string
}

export const useSearchCards = () => {
  const dispatch = useAppDispatch()
  const { data: cards, packId } = useGetCards()



  const [searchParams, setSearchParams] = useSearchParams()
  const params = Object.fromEntries(searchParams)


  /*const cardQuestion = useAppSelector(selectCardQuestion)*/
  /*const cards = useAppSelector(selectCards)*/


  /* useEffect(() => {
     const lastParams: TSearch = {}
     if (cardsPack_id) lastParams.id = cardsPack_id
     setSearchParams({ ...lastParams })
   }, [cardsPack_id])*/


  //searchName
  const fetchCardsName = (cardQuestion: string) => {
    /*  dispatch(cardsThunks.fetchCards({ cardsPack_id, cardQuestion }))*/
  }


  /**
   * Pagination
   */
  const getNewPage = (page: number, pageCount: number) => dispatch(setCardsParams({ page, pageCount, cardsPack_id: packId! }))


  const fetchSortCard = (sortCards: string) => {
    /*dispatch(cardsThunks.fetchCards({ cardsPack_id, sortCards }))*/
  }

  return {
    fetchSortCard,
    getNewPage,
    fetchCardsName,
    cards,
    params
  }
}
