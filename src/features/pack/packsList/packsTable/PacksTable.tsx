import { Paper, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
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

  const columnTitles: string[] = ['Name', 'Cards', 'Last Updated', 'Created by', 'Actions']
  return (
    <TableContainer style={{ marginTop: '24px', maxWidth: 1008 }} component={Paper}>
      <Table aria-label='simple table'>
        <TableHead sx={{ backgroundColor: '#EFEFEF' }}>
          <TableRow>
            {columnTitles.map((name, index) => <TableCell key={index} align='left'>{name}</TableCell>)}
          </TableRow>
        </TableHead>
        <PacksTableBody />
      </Table>
    </TableContainer>
  )
}