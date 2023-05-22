import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material'
import * as React from 'react'
import { useState } from 'react'

type Order = 'asc' | 'desc';

export const PacksTableHeader = () => {
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<string>('Last Updated')

  const columnTitles: string[] = ['Name', 'Cards', 'Last Updated', 'Created by', 'Actions']


  const createSortHandler = (title: string) => () => {
    setOrder(order === 'desc' ? 'asc' : 'desc')
    setOrderBy(title)
  }
  return (
    <TableHead sx={{ backgroundColor: '#EFEFEF' }}>
      <TableRow>
        {columnTitles.map((t, i) =>
          <TableCell key={i} align='left'>
            {t}
            {t === 'Cards' || t === 'Name' || t === 'Last Updated' ? <TableSortLabel
              active={orderBy === t}
              direction={order}
              onClick={createSortHandler(t)}
            >
            </TableSortLabel> : null}
          </TableCell>)}
      </TableRow>
    </TableHead>
  )
}