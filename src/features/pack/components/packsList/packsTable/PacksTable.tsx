import { Paper, Table, TableContainer } from '@mui/material'
import * as React from 'react'
import { PacksTableHeader } from 'features/pack/components/packsList/packsTable/packsTableHeader/PacksTableHeader'
import { PacksTableBody } from 'features/pack/components/packsList/packsTable/packsTableBody/PacksTableBody'

export const tableStyle = {
  marginTop: '24px',
  maxWidth: 1008,
  backgroundColor: 'black',
  borderColor: '#333333',
  borderStyle: 'solid',
  border: '0px 1px 0px 1px'
}

export const PacksTable = () => {
  return (
    <TableContainer style={tableStyle} component={Paper}>
      <Table>
        <PacksTableHeader />
        <PacksTableBody />
      </Table>
    </TableContainer>
  )
}