import { Paper, Table, TableContainer } from '@mui/material'
import * as React from 'react'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { useEffect } from 'react'
import { packsThunks } from 'features/pack/packs.slice'
import { CardTableHeader } from 'features/cards/friendsCard/cardTable/cardTableHeader/CardTableHeader'
import { CardTableBody } from 'features/cards/friendsCard/cardTable/cardTableBody/CardTableBody'


export const CardTable = () => {
  const dispatch = useAppDispatch()
  const packParams = useAppSelector(state => state.packs.packParams)

  useEffect(() => {
    dispatch(packsThunks.getPacks({}))
  }, [packParams])

  return (
    <TableContainer style={{ marginTop: '24px', maxWidth: 1008 }} component={Paper}>
      <Table>
        <CardTableHeader/>
        <CardTableBody/>
      </Table>
    </TableContainer>
  )
}