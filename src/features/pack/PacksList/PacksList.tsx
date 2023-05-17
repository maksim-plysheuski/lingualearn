import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { SearchBar } from 'features/pack/searchBar/SearchBar'
import {
  Box, FormControl, Pagination,
  Paper, Select, SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'
import { SearchBar } from 'features/pack/SearchBar'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { packsThunks } from 'features/pack/packs.slice'
import { useNavigate } from 'react-router-dom'
import { paths } from 'common/router/path'
import MenuItem from '@mui/material/MenuItem'


export const PacksList = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const currentPage = useAppSelector(state => state.packs.packs.page)
  const packsTotalCount = useAppSelector(state => state.packs.packs.cardPacksTotalCount)
  const rowsInTable = useAppSelector(state => state.packs.packs.pageCount)
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
  const packs = useAppSelector(state => state.packs.packs)


  useEffect(() => {
    dispatch(packsThunks.getPacks({ page: 1, pageCount: 8 }))
  }, [dispatch])

  const pagesTotalCount = Math.ceil(packsTotalCount / rowsInTable)
  const columnTitles: string[] = ['Name', 'Cards', 'Last Updated', 'Created by', 'Actions']

  const handleRowsChange = (event: SelectChangeEvent) => {
    dispatch(packsThunks.getPacks({ page: currentPage, pageCount: Number(event.target.value) }))
  }

  const handlePagesChange = (event: any) => {
    dispatch(packsThunks.getPacks({ page: event.target.textContent, pageCount: rowsInTable }))
  }

  if (!isLoggedIn) {
    navigate(paths.LOGIN)
  }

  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ width: 1008, display: 'flex', flexDirection: 'column' }}>
          <SearchBar />
          <TableContainer style={{ marginTop: '24px' }} component={Paper}>
            <Table aria-label='simple table'>
              <TableHead sx={{ backgroundColor: '#EFEFEF' }}>
                <TableRow>
                  {columnTitles.map((name, index) => <TableCell key={index} align='left'>{name}</TableCell>)}
                </TableRow>
              </TableHead>
              <TableBody>
                {packs.cardPacks?.map((card, index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: 48 }}
                  >
                    <TableCell component='th' scope='row'>
                      {card.name}
                    </TableCell>
                    <TableCell align='right'>{card.cardsCount}</TableCell>
                    <TableCell align='right'>{card.updated}</TableCell>
                    <TableCell align='right'>{card.user_name}</TableCell>
                    <TableCell align='right'>"need to fix"</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box component={'div'} sx={{ display: 'flex', alignItems: 'center', margin: '36px 0 72px 0' }}>
            <Pagination count={pagesTotalCount}
                        shape='rounded'
                        color='primary'
                        onClick={handlePagesChange} />

            <FormControl sx={{ minWidth: 50, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Box component={'span'}>Show</Box>
              <Select
                sx={{ height: '34px', margin: '0 7px 0 7px' }}
                defaultValue={'8'}
                value={rowsInTable ? String(rowsInTable) : '8'}
                onChange={handleRowsChange}
              >
                <MenuItem value={'8'}>8</MenuItem>
                <MenuItem value={'15'}>15</MenuItem>
                <MenuItem value={'25'}>25</MenuItem>
              </Select>
              <Box component={'span'}>Cards per page</Box>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </div>
  )
}
