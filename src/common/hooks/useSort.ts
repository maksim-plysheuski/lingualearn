import { useState } from 'react'
import { setCardsParams } from 'features/cards/service/cards.params.slice'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useParams } from 'react-router-dom'



export const useSort = (sortCallback: (sortTitle: string) => void) => {
  const dispatch = useAppDispatch()
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [lastSortedCell, setLastSortedCell] = useState<string>('Last Updated')
  const {packId} = useParams<{packId: string}>()


  const sortHandler = (columnTitle: string) => () => {

    let sortArgTitle
    switch (columnTitle) {
      case 'Cards':
        sortArgTitle = 'cardsCount'
        break
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
        sortArgTitle = 'updated'
        break
    }

    const payload = sortOrder === 'asc' ? `0${sortArgTitle}` : `1${sortArgTitle}`
    setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')
    setLastSortedCell(columnTitle)
    sortCallback(payload)
  }

  const fetchSortCards = (columnTitle: string) => dispatch(setCardsParams({ cardsPack_id: packId!, sortCards: columnTitle }))

  return {
    sortOrder,
    lastSortedCell,
    setLastSortedCell,
    sortHandler
  }
}