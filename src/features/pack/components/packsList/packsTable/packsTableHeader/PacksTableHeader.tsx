import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material'
import * as React from 'react'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { packAction } from 'features/pack/packs.slice'

export const PacksTableHeader = () => {
  const dispatch = useAppDispatch()
  const currentRowsCount = useAppSelector(state => state.packs.packs.pageCount)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [lastSortedCell, setLastSortedCell] = useState<string>('Last Updated')
  const columnTitles: string[] = ['Name', 'Cards', 'Last Updated', 'Created by', 'Actions']

  const handleSortButton = (title: string) => () => {
    let sortArgTitle

    if (title === 'Cards') {
      sortArgTitle = 'cardsCount'
    } else if (title === 'Last Updated') {
      sortArgTitle = 'updated'
    } else {
      sortArgTitle = 'name'
    }
    const payload = {
      sortPacks: sortOrder === 'asc'
        ? `0${sortArgTitle}`
        : `1${sortArgTitle}`,
      pageCount: currentRowsCount
    }
    setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')
    setLastSortedCell(title)

    dispatch(packAction.setPackParams(payload))
  }

  return (
    <TableHead sx={{ backgroundColor: '#EFEFEF' }}>
      <TableRow>
        {columnTitles.map((t, i) =>
          <TableCell key={i} onMouseEnter={() => {
            setLastSortedCell(t)
          }}>
            {t}
            {t === 'Name' || t === 'Cards' || t === 'Last Updated' ?
              <TableSortLabel
                active={lastSortedCell === t}
                direction={sortOrder}
                onClick={handleSortButton(t)}>
              </TableSortLabel> : null}
          </TableCell>)}
      </TableRow>
    </TableHead>
  )
}