import { Paper, Table, TableCell, TableContainer, TableHead, TableRow, TableSortLabel } from '@mui/material'
import { PacksTableBody } from 'features/pack/packsList/packsTable/packsTableBody/PacksTableBody'
import { EnhancedTable } from 'features/auth/CreateNewPassword/test'
import { visuallyHidden } from '@mui/utils'
import Box from '@mui/material/Box'
import * as React from 'react'
import { useState } from 'react'


export const PacksTable = () => {
  type Order = 'asc' | 'desc';
  const columnTitles: string[] = ['Name', 'Cards', 'Last Updated', 'Created by', 'Actions']
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof any>('Name');
  const [isShown, setIsShown] = useState(false);


  const createSortHandler = (name: string) => (event: React.MouseEvent<unknown>) => {

    setOrder(order === 'desc' ? 'asc' : 'desc');
    setOrderBy(name)
    };

  return (
    <TableContainer style={{ marginTop: '24px', maxWidth: 1008 }} component={Paper}>
      <Table aria-label='simple table'>


        <TableHead sx={{ backgroundColor: '#EFEFEF' }}>
          <TableRow>
            {columnTitles.map((name, index) =>

              <TableCell key={index} align='left'
                         onMouseEnter={() => console.log('hi')}
                         onMouseLeave={() => console.log('buy')}>

                <TableSortLabel
                  active={orderBy === name}
                  direction={order}
                  onClick={createSortHandler(name)}
                >
                  {name}
                  {orderBy === name ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                    </Box>
                  ) : null}
                </TableSortLabel>
            </TableCell>)}
          </TableRow>
        </TableHead>



        <PacksTableBody />
      </Table>
      <EnhancedTable />
    </TableContainer>
  )
}