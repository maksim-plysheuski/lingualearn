import { Paper, Table, TableContainer } from '@mui/material'
import * as React from 'react'
import { PacksTableHeader } from 'features/pack/components/packsList/packsTable/packsTableHeader/PacksTableHeader'
import { PacksTableBody } from 'features/pack/components/packsList/packsTable/packsTableBody/PacksTableBody'
import { tableContainerStyle } from 'common/style/tableContainerStyle'



export const PacksTable = () => {
  return (
    <TableContainer sx={tableContainerStyle} component={Paper}>
      <Table>
        <PacksTableHeader />
        <PacksTableBody />
      </Table>
    </TableContainer>
  )
}