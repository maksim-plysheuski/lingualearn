import { FC, ReactNode } from 'react'
import { Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import { tableCellSx, tableSx } from 'features/pack/components/packsList/packsTable/tableStyles'
import * as React from 'react'
import { skeletonSx } from 'common/components/skeletonPreloaders/style'

type Props = {
  rowsCount: number
  cellsCount: number
  children: ReactNode
}

export const TableSkeleton: FC<Props> = ({ rowsCount, cellsCount, children }) => {
  const cell = []
  const row = []

  for (let i = 0; i < cellsCount; i++) {
    cell.push(i)
  }
  for (let i = 0; i < rowsCount; i++) {
    row.push(i)
  }


  const tableCell = cell.map((c, i) => (
    <TableCell sx={{ ...tableCellSx, height: '59px' }} key={i}>
      <Skeleton sx={skeletonSx} variant='text' />
    </TableCell>
  ))

  return (
    <TableContainer sx={{ ...tableSx, mt: '28px' }} component={Paper}>
      <Table>
        {children}
        <TableBody>
          {row.map((r, i) => (
            <TableRow key={i}>
              {tableCell}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}