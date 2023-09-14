import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material'
import * as React from 'react'
import { tableCellSx, tableHeaderSx } from 'features/pack/components/packsList/packsTable/tableStyles'
import { useAppSelector } from 'common/hooks'
import { useFetchCards } from 'features/cards/hooks/useFetchCards'
import { useSortCards } from 'features/cards/hooks/useSortCards'
import { selectProfileUserId } from 'features/auth/selectors'

export const CardsTableHeader = () => {
  const { data } = useFetchCards()
  const profileUserId = useAppSelector(selectProfileUserId)
  const { sortOrder, sortHandler, lastSortedCell, setLastSortedCell } = useSortCards()
  const columnTitles: string[] = ['Question', 'Answer', 'Last Updated', 'Grade']

  if (profileUserId === data?.packUserId) {
    columnTitles.push('Actions')
  }

  return (
    <TableHead sx={tableHeaderSx}>
      <TableRow>
        {columnTitles.map((t, i) =>
          <TableCell key={i} sx={tableCellSx} onMouseEnter={() => setLastSortedCell(t)}>
            {t}
            {t !== 'Actions' ? <TableSortLabel
              sx={{ '& .MuiTableSortLabel-icon': { color: 'white !important' } }}
              active={lastSortedCell === t}
              direction={sortOrder}
              onClick={sortHandler(t)} /> : null}
          </TableCell>)}
      </TableRow>
    </TableHead>
  )
}