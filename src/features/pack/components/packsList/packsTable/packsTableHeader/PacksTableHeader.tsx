import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material'
import * as React from 'react'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { packsThunks } from 'features/pack/packs.slice'
import { tableCellStyle, tableHeaderStyle } from 'common/style/tableStyle'

export const PacksTableHeader = () => {
  const dispatch = useAppDispatch()
  const currentRowsCount = useAppSelector(state => state.packs.packs.pageCount)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [lastSortedCell, setLastSortedCell] = useState<string>('Last Updated')
  const columnTitles: string[] = ['Cover', 'Name', 'Cards', 'Last Updated', 'Created by', 'Actions']

  const handleSort = (sortTitle: string) => () => {
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
      pageCount: currentRowsCount
    }
    setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')
    setLastSortedCell(sortTitle)
    dispatch(packsThunks.getPacks(payload))
  }

  return (
    <TableHead sx={tableHeaderStyle}>
      <TableRow>
        {columnTitles.map((t, i) =>
          <TableCell key={i} sx={tableCellStyle} onMouseEnter={() => setLastSortedCell(t)}>
            {t}
            {t === 'Name' || t === 'Cards' || t === 'Last Updated' ?
              <TableSortLabel
                sx={{ '& .MuiTableSortLabel-icon': { color: 'white !important' } }}
                active={lastSortedCell === t}
                direction={sortOrder}
                onClick={handleSort(t)}>
              </TableSortLabel> : null}
          </TableCell>)}
      </TableRow>
    </TableHead>
  )
}