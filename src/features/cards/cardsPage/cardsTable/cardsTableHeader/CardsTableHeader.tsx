import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material'
import * as React from 'react'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { packAction } from 'features/pack/packs.slice'
import { cardsAction } from 'features/cards/cards.slice'

export const CardsTableHeader = () => {
  const dispatch = useAppDispatch()
  const currentRowsCount = useAppSelector(state => state.cards.cards.pageCount)
  const selectedPackId = useAppSelector(state => state.cards.selectedPackId)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [lastSortedCell, setLastSortedCell] = useState<string>('Last Updated')
  const columnTitles: string[] = ['Question', 'Answer', 'Last Updated', 'Grade', 'Actions']

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
    const payload = {
      sortCards: sortOrder === 'asc'
        ? `0${sortArgTitle}`
        : `1${sortArgTitle}`,
      pageCount: currentRowsCount
    }
    setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')
    setLastSortedCell(title)

    dispatch(cardsAction.setCardsParams({...payload, cardsPack_id: selectedPackId}))
  }

  return (
    <TableHead sx={{ backgroundColor: '#EFEFEF' }}>
      <TableRow>
        {columnTitles.map((t, i) =>
          <TableCell key={i} onMouseEnter={() => {
            setLastSortedCell(t)
          }}>
            {t}
            {t !== 'Actions' ?
              <TableSortLabel
                active={lastSortedCell === t}
                direction={sortOrder}
                onClick={handleSortButton(t)}>
              </TableSortLabel> : null}
          </TableCell>)}
      </TableRow>
    </TableHead>
  )
}