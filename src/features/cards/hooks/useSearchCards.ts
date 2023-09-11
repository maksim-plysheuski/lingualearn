import { useAppDispatch } from 'common/hooks'
import { useSearchParams } from 'react-router-dom'
import { setCardsParams } from 'features/cards/service/cards.params.slice'
import { useGetCards } from 'features/cards/hooks/useGetCards'
import { useCallback, useEffect, useState } from 'react'
import { useDebounce } from 'common/hooks/useDebounce'


type TSearch = {
  id?: string
  cardQuestion?: string
}

export const useSearchCards = () => {
  const dispatch = useAppDispatch()
  const { data: cards, packId } = useGetCards()
  const [searchValue, setSearchValue] = useState<string | null>(null)
  const debounceValue = useDebounce(searchValue, 800)

  useEffect(() => {
    if (debounceValue === null) return
    dispatch(setCardsParams({cardsPack_id: packId!, cardQuestion: debounceValue }))
  }, [debounceValue])

  const searchCardHandler = useCallback((inputValue: string) => {
    setSearchValue(inputValue)
  }, [dispatch])




  const [searchParams, setSearchParams] = useSearchParams()
  const params = Object.fromEntries(searchParams)


  /*const cardQuestion = useAppSelector(selectCardQuestion)*/
  /*const cards = useAppSelector(selectCards)*/


  /* useEffect(() => {
     const lastParams: TSearch = {}
     if (cardsPack_id) lastParams.id = cardsPack_id
     setSearchParams({ ...lastParams })
   }, [cardsPack_id])*/




  /**
   * Pagination
   */
  const getNewPage = (page: number, pageCount: number) => {
    dispatch(setCardsParams({ page, pageCount, cardsPack_id: packId! }))
  }


  /**
   * Sort cards by column title
   */
  const fetchSortCards = (columnTitle: string) => dispatch(setCardsParams({ cardsPack_id: packId!, sortCards: columnTitle }))

  return {
    fetchSortCards,
    getNewPage,
    searchCardHandler,
    searchValue,
    cards,
    params
  }
}
