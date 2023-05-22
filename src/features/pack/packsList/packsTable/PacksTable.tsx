import { Paper, Table, TableContainer } from '@mui/material'
import * as React from 'react'
import { PacksTableHeader } from 'features/pack/packsList/packsTable/packsTableHeader/PacksTableHeader'
import { PacksTableBody } from 'features/pack/packsList/packsTable/packsTableBody/PacksTableBody'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { useEffect } from 'react'
import { packsThunks } from 'features/pack/packs.slice'


export const PacksTable = () => {
  const dispatch = useAppDispatch()
  const packParams = useAppSelector(state => state.packs.packParams)

  useEffect(() => {
    dispatch(packsThunks.getPacks(packParams))
  }, [packParams])

  return (
    <TableContainer style={{ marginTop: '24px', maxWidth: 1008 }} component={Paper}>
      <Table>
        <PacksTableHeader/>
        <PacksTableBody/>
      </Table>
    </TableContainer>
  )
}