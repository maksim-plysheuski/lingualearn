import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material'
import * as React from 'react'
import { useState } from 'react'
import { useSearchCards } from 'features/cards/hooks/useSearchCards'
import { useSelector } from 'react-redux'
import { isMyCard } from '../../../../selectors'
import { tableCellStyle } from 'common/style/tableContainerStyle'

export const CardsTableHeader = () => {
  const { fetchSortCard } = useSearchCards()
  const whoseCards = useSelector(isMyCard)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [lastSortedCell, setLastSortedCell] = useState<string>('Last Updated')
  const columnTitles: string[] = ['Question', 'Answer', 'Last Updated', 'Grade']

  const handleSortButton = (title: string) => () => {
    let sortArgTitle
    switch (title) {
      case 'Question':
        sortArgTitle = 'question'
        break
      case 'Answer':
        sortArgTitle = 'answer'
        break
      case 'Last Updated':
        sortArgTitle = 'updated'
        break
      default:
        sortArgTitle = 'grade'
        break
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
          <TableCell key={i} sx={tableCellStyle} onMouseEnter={() => setLastSortedCell(t)}>
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