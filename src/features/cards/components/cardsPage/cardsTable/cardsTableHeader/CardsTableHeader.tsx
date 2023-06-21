import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material'
import * as React from 'react'
import { useState } from 'react'
import { useSearchCards } from 'features/cards/hooks/useSearchCards'
import { useSelector } from 'react-redux'
import { selectWhoseCards } from '../../../../selectors'

export const CardsTableHeader = () => {
  const { fetchSortCard } = useSearchCards()
  const whoseCards = useSelector(selectWhoseCards)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [lastSortedCell, setLastSortedCell] = useState<string>('Last Updated')
  const columnTitles: string[] = ['Question', 'Answer', 'Last Updated', 'Grade']

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
    fetchSortCard(sortCards)
  }

  return (
    <TableHead sx={{ backgroundColor: '#333333' }}>
      <TableRow>
        {columnTitles.map((t, i) =>
          <TableCell key={i} sx={{ color: 'white', borderBottom: '0' }} onMouseEnter={() => setLastSortedCell(t)}>
            {t}
            <TableSortLabel sx={{ '& .MuiTableSortLabel-icon': { color: 'white !important' } }}
                            active={lastSortedCell === t}
                            direction={sortOrder}
                            onClick={handleSortButton(t)}
            />
          </TableCell>)
        }
        {whoseCards && <TableCell sx={{ borderBottom: '0' }} />}
      </TableRow>
    </TableHead>
  )
}