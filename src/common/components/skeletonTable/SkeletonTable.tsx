import { Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import { tableCellSx, tableSx } from 'features/pack/components/packsList/packsTable/tableStyles'
import { PacksTableHeader } from 'features/pack/components/packsList/packsTable/packsTableHeader/PacksTableHeader'
import * as React from 'react'

type tableProps = {
  rows: number
  cells: number
}

export const SkeletonTable = (props: tableProps) => {
  let cell = []
  const row = []
  for (let i = 0; i < props.cells; i++) {
    cell.push(i)
  }
  for (let i = 0; i < +props.rows; i++) {
    row.push(i)
  }

  const skeletonSx = { bgcolor: 'grey.900', height: 40, width: '100%' }

  const tableCell = cell.map((c, i) => (
    <TableCell sx={{...tableCellSx, height: '59px'}} key={i}>
      <Skeleton sx={skeletonSx} variant='text' />
    </TableCell>
  ))

  return (
    <>
      <TableContainer sx={{...tableSx, mt: '225px'}} component={Paper}>
        <Table>
          <PacksTableHeader />
          <TableBody>
            {row.map((r, i) => (
              <TableRow key={i}>
                {tableCell}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}