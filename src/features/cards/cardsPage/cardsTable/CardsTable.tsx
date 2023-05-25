import { Paper, Table, TableContainer } from '@mui/material'
import * as React from 'react'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { useEffect } from 'react'
import { CardsTableHeader } from 'features/cards/cardsPage/cardsTable/cardsTableHeader/CardsTableHeader'
import { CardsTableBody } from 'features/cards/cardsPage/cardsTable/cardsTableBody/CardsTableBody'
import { cardsThunks } from 'features/cards/cards.slice'


export const CardsTable = () => {
  const dispatch = useAppDispatch()
  const cardsParams = useAppSelector(state => state.cards.cardsParams)

  useEffect(() => {
    dispatch(cardsThunks.getCards())
  }, [cardsParams])

  return (
    <TableContainer style={{ marginTop: '24px', maxWidth: 1008 }} component={Paper}>
      <Table>
        <CardsTableHeader />
        <CardsTableBody />
      </Table>
    </TableContainer>
  )
}