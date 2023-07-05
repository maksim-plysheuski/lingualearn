import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material'
import * as React from 'react'
import { useState } from 'react'
import { useSearchCards } from 'features/cards/hooks/useSearchCards'
import { useSelector } from 'react-redux'
import { tableCellStyle, tableHeaderStyle } from 'common/style/tableStyle'
import { selectIsMyCard } from 'features/cards/selectors'

export const CardsTableHeader = () => {
  const { fetchSortCard } = useSearchCards()
  const isMyCard = useSelector(selectIsMyCard)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [lastSortedCell, setLastSortedCell] = useState<string>('Last Updated')
  const columnTitles: string[] = ['Question', 'Answer', 'Last Updated', 'Grade']
  if (isMyCard) columnTitles.push('Actions')

  const handleSort = (sortTitle: string) => () => {
    let sortArgTitle
    switch (sortTitle) {
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
    setLastSortedCell(sortTitle)
    fetchSortCard(sortCards)
  }

  return (
    <TableHead sx={tableHeaderStyle}>
      <TableRow>
        {columnTitles.map((t, i) =>
          <TableCell key={i} sx={tableCellStyle} onMouseEnter={() => setLastSortedCell(t)}>
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