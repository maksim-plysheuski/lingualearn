import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material'
import * as React from 'react'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { setCardParams, useFetchCards } from 'features/cards/service'


const columnTitles: string[] = ['Question', 'Answer', 'Last Updated', 'Grade']

export const CardsTableHeader = () => {
  const dispatch = useAppDispatch()
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [lastSortedCell, setLastSortedCell] = useState<string>('Last Updated')


  const userId = useAppSelector(state => state.auth.profile._id)

  const { data } = useFetchCards()
  const show = userId === data?.packUserId

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
          <TableCell key={i} sx={{ color: 'white', borderBottom: '0' }} onMouseEnter={() => setLastSortedCell(t)}>
            {t}
            <TableSortLabel sx={{ '& .MuiTableSortLabel-icon': { color: 'white !important' } }}
                            active={lastSortedCell === t}
                            direction={sortOrder}
                            onClick={handleSortButton(t)}
            />
          </TableCell>)
        }
        {show && <TableCell sx={{ borderBottom: '0' }} />}
      </TableRow>
    </TableHead>
  )
}