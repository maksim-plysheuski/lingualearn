import { Paper, Table, TableContainer } from '@mui/material'
import * as React from 'react'
import { CardsTableHeader } from 'features/cards/components/cardsTable/cardsTableHeader/CardsTableHeader'
import { CardsTableBody } from 'features/cards/components/cardsTable/cardsTableBody/CardsTableBody'


export const CardsTable = () => {
  return (
    <TableContainer style={{ marginTop: '24px', maxWidth: 1008 }} component={Paper}>
      <Table>
        <CardsTableHeader />
        <CardsTableBody />
      </Table>
    </TableContainer>
  )
}