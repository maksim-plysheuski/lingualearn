import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material'
import * as React from 'react'
import { tableCellSx, tableHeaderSx } from 'features/pack/components/packsList/packsTable/tableStyles'
import { useAppSelector } from 'common/hooks'
import { selectUserId } from 'features/profile/selectors/selectors'
import { useGetCards } from 'features/cards/hooks/useGetCards'
import { useSortCards } from 'features/cards/hooks/useSortCards'

export const CardsTableHeader = () => {
  const { data } = useGetCards()
  const userId = useAppSelector(selectUserId)
  const { sortOrder, sortHandler, lastSortedCell, setLastSortedCell } = useSortCards()
  const columnTitles: string[] = ['Question', 'Answer', 'Last Updated', 'Grade']

  if (userId === data?.packUserId) {
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