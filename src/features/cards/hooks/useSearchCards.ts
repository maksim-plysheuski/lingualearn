import { useAppDispatch, useAppSelector } from 'common/hooks'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { cardsThunks } from 'features/cards/cards.slice'

type TSearch = {
  cardsPack_id?: string
  cardQuestion?: string
}

export const useSearchCards = () => {
  const dispatch = useAppDispatch()
  const currentPage = useAppSelector(state => state.cards.cards.page)
  const cardsTotalCount = useAppSelector(state => state.cards.cards.cardsTotalCount)
  const cardsPerPage = useAppSelector(state => state.cards.cards.pageCount)
  const cards = useAppSelector(state => state.cards.cards.cards)

  const cardsPack_id = useAppSelector(state => state.cards.cardsParams.cardsPack_id)
  const cardQuestion = useAppSelector(state => state.cards.cardsParams.cardQuestion)

  const [searchParams, setSearchParams] = useSearchParams()
  const params = Object.fromEntries(searchParams)

  useEffect(() => {
    const lastParams: TSearch = {}
    if (cardsPack_id) lastParams.cardsPack_id = cardsPack_id
    if (cardQuestion) lastParams.cardQuestion = cardQuestion
    setSearchParams({ ...lastParams })
  }, [cardsPack_id, cardQuestion])

  //searchName
  const [name, setName] = useState<string>()

  const fetchCardsName = (cardQuestion: string) => {
    dispatch(cardsThunks.fetchCards({ cardsPack_id, cardQuestion }))
  }

  return {
    cardQuestion,
    cards,
    fetchCardsName,
    cardsPack_id,
    params
  }
}
