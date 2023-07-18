import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material'
import * as React from 'react'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { setCardParams, useFetchCards } from 'features/cards/service'
import { userIdSelect } from 'features/profile'
import { tableCellStyle } from 'features/cards/components/cardsPage/cardsTable/cardsTableBody/CardsTableBody'


export const CardsTableHeader = () => {
  const columnTitles: string[] = ['Question', 'Answer', 'Last Updated', 'Grade']
  const dispatch = useAppDispatch()
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [lastSortedCell, setLastSortedCell] = useState<string>('Last Updated')
  const userId = useAppSelector(userIdSelect)
  const { data } = useFetchCards()
  const show = userId === data?.packUserId
  if (show) columnTitles.push('Actions')


  const handleSortButton = (title: string) => () => {
    let sortArgTitle
    if (title === 'Question') {
      sortArgTitle = 'question'
    } else if (title === 'Answer') {
      sortArgTitle = 'answer'
    } else if (title === 'Last Updated') {
      sortArgTitle = 'updated'
    } else {
      sortArgTitle = 'grade'
    }

    const sortCards = sortOrder === 'asc' ? `0${sortArgTitle}` : `1${sortArgTitle}`
    setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')
    setLastSortedCell(title)
    dispatch(setCardParams({ sortCards }))
  }

  return (
    <TableHead sx={{ backgroundColor: '#333333' }}>
      <TableRow>
        {columnTitles.map((t, i) =>
          <TableCell key={i} sx={tableCellStyle} onMouseEnter={() => setLastSortedCell(t)}>
            {t}
            {t !== 'Actions' ? <TableSortLabel
              sx={{ '& .MuiTableSortLabel-icon': { color: 'white !important' } }}
              active={lastSortedCell === t}
              direction={sortOrder}
              onClick={handleSortButton(t)} /> : null}
          </TableCell>)
        }
      </TableRow>
    </TableHead>
  )
}