import {TableCell, TableHead, TableRow, TableSortLabel} from '@mui/material'
import {useState} from 'react'
import {useAppDispatch} from 'common/hooks'
import {setPackParams} from "features/pack/service/sortPackSlice";

export const PacksTableHeader = () => {
  const dispatch = useAppDispatch()

  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [lastSortedCell, setLastSortedCell] = useState<string>('Last Updated')
  const columnTitles: string[] = ['Name', 'Cards', 'Last Updated', 'Created by', 'Actions']

  const handleSortButton = (title: string) => () => {
    let sortArgTitle

    if (title === 'Cards') {
      sortArgTitle = 'cardsCount'
    } else if (title === 'Last Updated') {
      sortArgTitle = 'updated'
    } else {
      sortArgTitle = 'name'
    }
    const payload = {
      sortPacks: sortOrder === 'asc'
        ? `0${sortArgTitle}`
        : `1${sortArgTitle}`,
      pageCount: 4
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
                     sx={{color: 'white', borderBottom: '0'}}
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