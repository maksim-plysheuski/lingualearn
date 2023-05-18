import {
  Box,
  Pagination,
  Paper,
  Stack,
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


export const PacksList = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
  const isLoading = useAppSelector(state => state.packs.isLoading)
  const packs = useAppSelector(state => state.packs.packs)
  const cellNames: string[] = ['Name', 'Cards', 'Last Updated', 'Created by', 'Actions']


  useEffect(() => {
    dispatch(packsThunks.getPacks({}))
  }, [dispatch])

  if (!isLoggedIn) {
    navigate(paths.LOGIN)
  }

  return (
    <div>
      <SearchBar />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}>
        <TableContainer sx={{ width: 1008 }} component={Paper}>
          <Table aria-label='simple table'>
            <TableHead sx={{ backgroundColor: '#EFEFEF' }}>
              <TableRow>
                {cellNames.map((name, index) => <TableCell key={index} align='left'>{name}</TableCell>)}
              </TableRow>
            </TableHead>
            <TableBody>
              {packs.cardPacks?.map((card) => (
                <TableRow
                  key={card.name}
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
        <Stack spacing={2}>
          <Pagination count={10} shape='rounded' />
        </Stack>
      </Box>
    </div>
  )
}
