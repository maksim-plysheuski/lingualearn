import { Paper, Table, TableContainer } from '@mui/material'
import * as React from 'react'
import { useEffect } from 'react'
import { PacksTableHeader } from 'features/pack/packsList/packsTable/packsTableHeader/PacksTableHeader'
import { PacksTableBody } from 'features/pack/packsList/packsTable/packsTableBody/PacksTableBody'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { packAction, packsThunks } from 'features/pack/packs.slice'
import { useSearchParams } from 'react-router-dom'
import { PackArgs } from 'features/pack/packApi'


export const PacksTable = () => {

  const dispatch = useAppDispatch()
  const packParams = useAppSelector(state => state.packs.packParams)
  const { user_id, packName, min, max } = useAppSelector(state => state.packs.packParams)
  const [searchParams, setSearchParams] = useSearchParams()
  const params = Object.fromEntries(searchParams)

  useEffect(() => {
    const lastParams: PackArgs = {}
    if (user_id) lastParams.user_id = user_id
    if (packName) lastParams.packName = packName
    if (min) lastParams.min = min.toString()
    if (max) lastParams.max = max.toString()
    setSearchParams({ ...lastParams })
  }, [packParams])

  useEffect(() => {
    dispatch(packAction.setPackParams(params))
  }, [])
  useEffect(() => {

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