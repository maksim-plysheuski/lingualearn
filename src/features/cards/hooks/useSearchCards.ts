import { useAppSelector } from 'common/hooks'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export const useSearchCards = () => {
  const currentPage = useAppSelector(state => state.cards.cards.page)
  const cardsTotalCount = useAppSelector(state => state.cards.cards.cardsTotalCount)
  const cardsPerPage = useAppSelector(state => state.cards.cards.pageCount)
  const cardsPack_id = useAppSelector(state => state.cards.cardsParams.cardsPack_id)

  const [searchParams, setSearchParams] = useSearchParams()
  const params = Object.fromEntries(searchParams)

  useEffect(() => {
    const lastParams: TSearch = {}
    if (cardsPack_id) lastParams.cardsPack_id = cardsPack_id

    setSearchParams({ ...lastParams })
  }, [cardsPack_id])

  return {
    cardsPack_id,
    params
  }
}
type TSearch = {
  cardsPack_id?: string
}