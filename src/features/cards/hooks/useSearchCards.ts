import { useAppDispatch, useAppSelector } from 'common/hooks'
import { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { cardsThunks } from 'features/cards/cards.slice'
import {
  selectCardQuestion,
  selectCards,
  selectPackId,
  selectCardsTotalCount,
  selectPage,
  selectPageCount
} from 'features/cards/selectors'
import { setCardsParams } from 'features/cards/service/cards.params.slice'
import { useGetCards } from 'features/cards/hooks/useGetCards'


type TSearch = {
  id?: string
  cardQuestion?: string
}

export const useSearchCards = () => {
  const dispatch = useAppDispatch()
  const {data: cards} = useGetCards()
  const page = useAppSelector(selectPage)
  const cardsTotalCount = useAppSelector(selectCardsTotalCount)
  const pageCount = useAppSelector(selectPageCount)
  const cardsPack_id = useAppSelector(selectPackId)


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
  //fetchPageNewCards
  const getNewPage = (page: number, pageCount: number) => {
     dispatch(setCardsParams({ page, pageCount, cardsPack_id  }))
  }
  //fetchSortCard
  const fetchSortCard = (sortCards: string) => {
    /*dispatch(cardsThunks.fetchCards({ cardsPack_id, sortCards }))*/
  }

  return {
    fetchSortCard,
    getNewPage,
    fetchCardsName,
    pageCount,
    cardsTotalCount,
    page,
    cards,
    params
  }
}
