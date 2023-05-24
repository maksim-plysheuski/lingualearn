import { Paper, Table, TableContainer } from '@mui/material'
import * as React from 'react'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { useEffect } from 'react'
import { packsThunks } from 'features/pack/packs.slice'
import { CardsTableHeader } from 'features/cards/cardsPage/cardsTable/cardsTableHeader/CardsTableHeader'
import { CardsTableBody } from 'features/cards/cardsPage/cardsTable/cardsTableBody/CardsTableBody'


export const CardsTable = () => {
  const dispatch = useAppDispatch()
  const packParams = useAppSelector(state => state.packs.packParams)

  useEffect(() => {
    dispatch(packsThunks.getPacks({}))
  }, [packParams])

  return (
    <TableContainer style={{ marginTop: '24px', maxWidth: 1008 }} component={Paper}>
      <Table>
        <CardsTableHeader/>
        <CardsTableBody/>
      </Table>
    </TableContainer>
  )
}