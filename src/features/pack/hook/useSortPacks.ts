import { useAppDispatch, useAppSelector } from 'common/hooks'
import { useCallback, useState } from 'react'
import { selectPageCountPacksParam, selectUserIdParam } from 'features/pack/selectors'
import { setPackParams } from 'features/pack/service/packs.params.slice'
import { selectUserId } from 'features/profile/selectors/selectors'
import { selectIsAppLoading } from 'app'

export const useSortPacks = () => {
  const dispatch = useAppDispatch()
  const userIdParam = useAppSelector(selectUserIdParam)
  const userId = useAppSelector(selectUserId)
  const isAppLoading = useAppSelector(selectIsAppLoading)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [lastSortedCell, setLastSortedCell] = useState<string>('Last Updated')
  const currentRowsCount = useAppSelector(selectPageCountPacksParam)

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

  const getPacksHandler = useCallback((user_id: string) => dispatch(setPackParams({ user_id })), [])

  return {
    userId,
    getPacksHandler,
    isAppLoading,
    userIdParam,
    dispatch,
    lastSortedCell,
    setLastSortedCell,
    sortOrder,
    sortHandler
  }
}

