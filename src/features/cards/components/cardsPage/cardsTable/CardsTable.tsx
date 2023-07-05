import { Paper, Table, TableContainer } from '@mui/material'
import * as React from 'react'
import { CardsTableHeader } from 'features/cards/components/cardsPage/cardsTable/cardsTableHeader/CardsTableHeader'
import { CardsTableBody } from 'features/cards/components/cardsPage/cardsTable/cardsTableBody/CardsTableBody'
import { tableContainerStyle } from 'common/style/tableContainerStyle'

export const CardsTable = () => {
  return (
    <TableContainer style={tableContainerStyle} component={Paper}>
      <Table>
        <CardsTableHeader />
        <CardsTableBody />
      </Table>
    </TableContainer>
  )
}