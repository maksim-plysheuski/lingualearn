import { Paper, Table, TableContainer } from '@mui/material'
import * as React from 'react'
import { CardsTableHeader } from 'features/cards/components/cardsPage/cardsTable/cardsTableHeader/CardsTableHeader'
import { CardsTableBody } from 'features/cards/components/cardsPage/cardsTable/cardsTableBody/CardsTableBody'
import { tableSx } from 'features/pack/components/packsList/packsTable/tableStyles'

export const CardsTable = () => {

  return (
    <TableContainer sx={tableSx} component={Paper}>
      <Table>
        <CardsTableHeader />
        <CardsTableBody />
      </Table>
    </TableContainer>
  )
}