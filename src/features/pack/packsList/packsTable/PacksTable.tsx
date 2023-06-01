import { Paper, Table, TableContainer } from '@mui/material'
import * as React from 'react'
import { PacksTableHeader } from 'features/pack/packsList/packsTable/packsTableHeader/PacksTableHeader'
import { PacksTableBody } from 'features/pack/packsList/packsTable/packsTableBody/PacksTableBody'
import { useSearchCards } from 'features/pack/hook/useSearchCards'
import { useEffect } from 'react'
import { packAction, packsThunks } from 'features/pack/packs.slice'


export const PacksTable = () => {
  const { params, dispatch } = useSearchCards()

  useEffect(() => {
    dispatch(packAction.setPackParams(params))
    dispatch(packsThunks.getPacks(params))
  }, [])

  return (
    <TableContainer style={{ marginTop: '24px', maxWidth: 1008 }} component={Paper}>
      <Table>
        <PacksTableHeader />
        <PacksTableBody />
      </Table>
    </TableContainer>
  )
}