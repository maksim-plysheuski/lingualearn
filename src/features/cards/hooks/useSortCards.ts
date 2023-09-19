import { useCallback, useState } from 'react'
import { setCardsParams } from 'features/cards/service/cards.params.slice'
import { useAppDispatch } from 'common/hooks'
import { useParams } from 'react-router-dom'
import { useFetchCards } from 'features/cards/hooks/useFetchCards'


export const useSortCards = () => {
  const dispatch = useAppDispatch()
  const { data: cards, isFetching } = useFetchCards()
  const { packId } = useParams<{ packId: string }>()
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [lastSortedCell, setLastSortedCell] = useState<string>('Last Updated')

  const sortHandler = (sortTitle: string) => () => {
    let sortArgTitle
    switch (sortTitle) {
      case 'Question':
        sortArgTitle = 'question'
        break
      case 'Answer':
        sortArgTitle = 'answer'
        break
      case 'Last Updated':
        sortArgTitle = 'updated'
        break
      default:
        sortArgTitle = 'grade'
        break
    }
    const sortCards = sortOrder === 'asc' ? `0${sortArgTitle}` : `1${sortArgTitle}`
    dispatch(setCardsParams({ cardsPack_id: packId!, sortCards }))
    setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')
    setLastSortedCell(sortTitle)
  }

  /**
   * Sort cards by column title
   */
  const fetchSortCards = (columnTitle: string) => dispatch(setCardsParams({ cardsPack_id: packId!, sortCards: columnTitle }))

  /**
   * Pagination
   */
  const getNewPage = useCallback((page: number, pageCount: number) => {
    dispatch(setCardsParams({ page, pageCount, cardsPack_id: packId! }))
  }, [dispatch])

  return { sortOrder, sortHandler, lastSortedCell, setLastSortedCell, fetchSortCards, getNewPage, cards, isFetching }
}