import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material'
import * as React from 'react'
import { useState } from 'react'
import { useSearchCards } from 'features/cards/hooks/useSearchCards'
import { tableCellSx, tableHeaderSx } from 'features/pack/components/packsList/packsTable/tableStyles'
import { useAppSelector } from 'common/hooks'
import { selectUserId } from 'features/profile/selectors/selectors'
import { useGetCards } from 'features/cards/hooks/useGetCards'
import { useSort } from 'common/hooks/useSort'

export const CardsTableHeader = () => {
  const { fetchSortCards } = useSearchCards()
  const {sortOrder, lastSortedCell, setLastSortedCell, sortHandler} = useSort(fetchSortCards)
  const userId = useAppSelector(selectUserId)
  const {data} = useGetCards()
  const columnTitles: string[] = ['Question', 'Answer', 'Last Updated', 'Grade']
  if (userId === data?.packUserId) columnTitles.push('Actions')


  const handleSort = (sortTitle: string) => () => {
    sortHandler(sortTitle)
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
              onClick={handleSort(t)} /> : null}
          </TableCell>)}
      </TableRow>
    </TableHead>
  )
}