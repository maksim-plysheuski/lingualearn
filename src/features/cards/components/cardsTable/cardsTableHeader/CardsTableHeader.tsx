import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material'
import * as React from 'react'
import { useState } from 'react'
import { useSearchCards } from 'features/cards/hooks/useSearchCards'

export const CardsTableHeader = () => {
  const { fetchSortCard } = useSearchCards()

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
    <TableHead sx={{ backgroundColor: '#EFEFEF' }}>
      <TableRow>
        {columnTitles.map((t, i) =>
          <TableCell key={i} onMouseEnter={() => {
            setLastSortedCell(t)
          }}>
            {t}
            {<TableSortLabel active={lastSortedCell === t}
                             direction={sortOrder}
                             onClick={handleSortButton(t)} />}
          </TableCell>)}
      </TableRow>
    </TableHead>
  )
}