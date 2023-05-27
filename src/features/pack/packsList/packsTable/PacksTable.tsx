import { Paper, Table, TableContainer } from '@mui/material'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { PacksTableHeader } from 'features/pack/packsList/packsTable/packsTableHeader/PacksTableHeader'
import { PacksTableBody } from 'features/pack/packsList/packsTable/packsTableBody/PacksTableBody'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { packAction, packsThunks } from 'features/pack/packs.slice'
import { useSearchParams } from 'react-router-dom'


export const PacksTable = () => {
  const dispatch = useAppDispatch()

  const packParams = useAppSelector(state => state.packs.packParams)
  const [searchParams, setSearchParams] = useSearchParams()
  const [edit, setEdit] = useState<boolean>(true)

  useEffect(() => {
    const packName = searchParams.get('packName')
    dispatch(packAction.setPackParams({ packName: packName! }))
  }, [])
  useEffect(() => {
    setEdit(false)
    if (edit) return
    dispatch(packsThunks.getPacks({}))
  }, [packParams])

  return (
    <TableContainer style={{ marginTop: '24px', maxWidth: 1008 }} component={Paper}>
      <Table>
        <PacksTableHeader />
        <PacksTableBody />
      </Table>
    </TableContainer>
  )
}