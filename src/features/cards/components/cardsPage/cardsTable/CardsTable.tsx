import { Paper, Table, TableContainer } from '@mui/material'
import * as React from 'react'
import { CardsTableHeader } from 'features/cards/components/cardsPage/cardsTable/cardsTableHeader/CardsTableHeader'
import { CardsTableBody } from 'features/cards/components/cardsPage/cardsTable/cardsTableBody/CardsTableBody'
import { tableStyle } from 'features/pack/components/packsList/PacksList'

export const CardsTable = () => {
  return (
    <TableContainer style={tableStyle} component={Paper}>
      <Table>
        <CardsTableHeader />
        <CardsTableBody />
      </Table>
    </TableContainer>
  )
}