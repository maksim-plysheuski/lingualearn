import { useState } from 'react'
import { setCardsParams } from 'features/cards/service/cards.params.slice'
import { useAppDispatch } from 'common/hooks'
import { useParams } from 'react-router-dom'


export const useSortCards = () => {
  const dispatch = useAppDispatch()
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

  return { sortOrder, sortHandler, lastSortedCell, setLastSortedCell }
}