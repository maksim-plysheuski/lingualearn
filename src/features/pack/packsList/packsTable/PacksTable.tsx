import { Paper, Table, TableContainer } from '@mui/material'
import * as React from 'react'
import { PacksTableHeader } from 'features/pack/packsList/packsTable/packsTableHeader/PacksTableHeader'
import { PacksTableBody } from 'features/pack/packsList/packsTable/packsTableBody/PacksTableBody'


export const PacksTable = () => {

  return (
    <TableContainer style={{ marginTop: '24px', maxWidth: 1008 }} component={Paper}>
      <Table>
        <PacksTableHeader/>
        <PacksTableBody/>
      </Table>
    </TableContainer>
  )
}