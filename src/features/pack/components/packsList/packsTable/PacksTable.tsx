import { Paper, Table, TableContainer } from '@mui/material'
import * as React from 'react'
import { PacksTableHeader } from 'features/pack/components/packsList/packsTable/packsTableHeader/PacksTableHeader'
import { PacksTableBody } from 'features/pack/components/packsList/packsTable/packsTableBody/PacksTableBody'
import { tableSx } from 'common/style/tableStyles'



export const PacksTable = () => {
  return (
    <TableContainer sx={tableSx} component={Paper}>
      <Table>
        <PacksTableHeader />
        <PacksTableBody />
      </Table>
    </TableContainer>
  )
}