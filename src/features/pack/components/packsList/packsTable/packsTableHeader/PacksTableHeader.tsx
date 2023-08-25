import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material'
import * as React from 'react'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { tableCellSx, tableHeaderSx } from 'features/pack/components/packsList/packsTable/tableStyles'
import { setPackParams } from 'features/pack/service/packs.params.slice'
import { SelectPageCountPacksParam } from 'features/pack/selectors'

export const PacksTableHeader = () => {
  const dispatch = useAppDispatch()
  const currentRowsCount = useAppSelector(SelectPageCountPacksParam)
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
      pageCount: currentRowsCount ? currentRowsCount : 4
    }
    dispatch(setPackParams(payload))
    setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')
    setLastSortedCell(sortTitle)
  }

  return (
    <TableHead sx={tableHeaderSx}>
      <TableRow>
        {columnTitles.map((t, i) =>
          <TableCell key={i} sx={tableCellSx} onMouseEnter={() => setLastSortedCell(t)}>
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