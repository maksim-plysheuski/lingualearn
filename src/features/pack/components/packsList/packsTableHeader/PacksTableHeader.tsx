import {TableCell, TableHead, TableRow, TableSortLabel} from '@mui/material'
import {useState} from 'react'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import {setPackParams} from "features/pack/service/sortPackSlice";

export const PacksTableHeader = () => {
  const dispatch = useAppDispatch()
  const currentRowsCount = useAppSelector(state => state.paramsCard.pageCount)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [lastSortedCell, setLastSortedCell] = useState<string>('Last Updated')
  const columnTitles: string[] = ['Cover', 'Name', 'Cards', 'Last Updated', 'Created by', 'Actions']

  const tableCellStyle = {
    wordWrap: 'break-word',
    maxWidth: '250px',
    color: 'white',
    borderBottom: '1px solid #333333',
    padding: '6px 24px 6px 24px',
    height: '55px'
  }

  const handleSortButton = (title: string) => () => {
    let sortArgTitle
    switch (title) {
      case 'Cards':
        sortArgTitle = 'cardsCount'
        break
      case 'Last Updated':
        sortArgTitle = 'updated'
        break
      default:
        sortArgTitle = 'name'
        break
    }
    const payload = {
      sortPacks: sortOrder === 'asc'
        ? `0${sortArgTitle}`
        : `1${sortArgTitle}`,
      pageCount: currentRowsCount ? currentRowsCount : 4
    }
    setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')
    setLastSortedCell(title)

    dispatch(setPackParams(payload))
  }

  return (
    <TableHead sx={{ backgroundColor: '#333333'}}>
      <TableRow>
        {columnTitles.map((t, i) =>
          <TableCell key={i}
                     sx={tableCellStyle}
                     onMouseEnter={() => setLastSortedCell(t)}>
            {t}
            {t === 'Name' || t === 'Cards' || t === 'Last Updated' ?
              <TableSortLabel
                sx={{'& .MuiTableSortLabel-icon': { color: 'white !important'} }}
                active={lastSortedCell === t}
                direction={sortOrder}
                onClick={handleSortButton(t)} >
              </TableSortLabel> : null}
          </TableCell>)}
      </TableRow>
    </TableHead>
  )
}