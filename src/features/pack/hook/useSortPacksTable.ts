import { useAppDispatch, useAppSelector } from 'common/hooks'
import { selectPageCountPacksParam } from 'features/pack/selectors'
import { useState } from 'react'
import { setPackParams } from 'features/pack/service/packs.params.slice'


export const useSortPacksTable = () => {
  const dispatch = useAppDispatch()
  const currentRowsCount = useAppSelector(selectPageCountPacksParam)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [lastSortedCell, setLastSortedCell] = useState<string>('Last Updated')

  const sortHandler = (sortTitle: string) => () => {
    let sortArgTitle
    switch (sortTitle) {
      case 'Cards':
        sortArgTitle = 'cardsCount'
        break
      case 'Last Updated':
        sortArgTitle = 'updated'
        break
      default:
        sortArgTitle = 'name'
        break
    }
    const payload = {
      sortPacks: sortOrder === 'asc'
        ? `0${sortArgTitle}`
        : `1${sortArgTitle}`,
      pageCount: currentRowsCount ? currentRowsCount : 4
    }
    dispatch(setPackParams(payload))
    setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')
    setLastSortedCell(sortTitle)
  }
  return { lastSortedCell, setLastSortedCell, sortOrder, sortHandler }
}