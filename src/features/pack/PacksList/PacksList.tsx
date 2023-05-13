import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { SearchBar } from 'features/pack/SearchBar'

function createData(
  name: any,
  cards: any,
  lastUpdated: any,
  createdBy: any,
  actions: any
) {
  return { name, cards, lastUpdated, createdBy, actions }
}

const rows = [
  createData('Shkutnik Volodia', 159, 6.0, 24, 4.0),
  createData('Chernousik Big boss', 237, 9.0, 37, 4.3),
  createData('Lepeshko Shtabist', 262, 16.0, 24, 6.0),
  createData('Migai Boss', 305, 3.7, 67, 4.3),
  createData('Name 2', 356, 16.0, 49, 3.9),
  createData('name 3', 356, 16.0, 49, 3.9),
  createData('Plysheuski Maksim', 356, 16.0, 49, 3.9),
  createData('Leskevich Artem', 356, 16.0, 49, 3.9)
]

export const PacksList = () => {
  return (
    <div>
      <SearchBar/>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <TableContainer sx={{ width: 1008, height: 432 }} component={Paper}>
          <Table aria-label='simple table'>
            <TableHead sx={{ backgroundColor: '#EFEFEF' }}>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align='right'>Cards</TableCell>
                <TableCell align='right'>Last Updated</TableCell>
                <TableCell align='right'>Created by</TableCell>
                <TableCell align='right'>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: 48 }}
                >
                  <TableCell component='th' scope='row'>
                    {row.name}
                  </TableCell>
                  <TableCell align='right'>{row.cards}</TableCell>
                  <TableCell align='right'>{row.lastUpdated}</TableCell>
                  <TableCell align='right'>{row.createdBy}</TableCell>
                  <TableCell align='right'>{row.actions}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  )
}