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

type TSearch = {
  id?: string
  cardQuestion?: string
}

export const useSearchCards = () => {
  const dispatch = useAppDispatch()
  const page = useAppSelector(selectPage)
  const cardsTotalCount = useAppSelector(selectCardsTotalCount)
  const pageCount = useAppSelector(selectPageCount)
  const cards = useAppSelector(selectCards)
  /*const cardsPack_id = useAppSelector(selectPackId)*/
  const cardQuestion = useAppSelector(selectCardQuestion)

  const [searchParams, setSearchParams] = useSearchParams()
  const params = Object.fromEntries(searchParams)


  const { cardsPack_id } = useParams<{ cardsPack_id: string }>()




  /*useEffect(() => {
    const lastParams: TSearch = {}
    if (cardsPack_id) lastParams.id = cardsPack_id
    if (cardQuestion) lastParams.cardQuestion = cardQuestion
    setSearchParams({ ...lastParams })
  }, [cardsPack_id, cardQuestion])*/

  //searchName
  const fetchCardsName = (cardQuestion: string) => {
    /*  dispatch(cardsThunks.fetchCards({ cardsPack_id, cardQuestion }))*/
  }
  //fetchPageNewCards
  const fetchPageNewCards = (page: number, pageCount: number) => {
    /* dispatch(cardsThunks.fetchCards({ cardsPack_id, page, pageCount }))*/
  }
  //fetchSortCard
  const fetchSortCard = (sortCards: string) => {
    /*dispatch(cardsThunks.fetchCards({ cardsPack_id, sortCards }))*/
  }

  return {
    fetchSortCard,
    fetchPageNewCards,
    fetchCardsName,
    pageCount,
    cardsTotalCount,
    page,
    cardQuestion,
    cards,
    cardsPack_id,
    params
  }
}
