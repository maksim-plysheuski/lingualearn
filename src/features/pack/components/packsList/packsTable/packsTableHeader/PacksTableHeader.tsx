import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material'
import * as React from 'react'
import { tableCellSx, tableHeaderSx } from 'features/pack/components/packsList/packsTable/tableStyles'
import { useSortPacks } from 'features/pack/hook/useSortPacks'


export const PacksTableHeader = () => {
  const { lastSortedCell, setLastSortedCell, sortOrder, sortHandler } = useSortPacks()
  const columnTitles: string[] = ['Cover', 'Name', 'Cards', 'Last Updated', 'Created by', 'Actions']

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
                onClick={sortHandler(t)}>
              </TableSortLabel> : null}
          </TableCell>)}
      </TableRow>
    </TableHead>
  )
}