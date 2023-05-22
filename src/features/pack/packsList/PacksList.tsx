import { Box } from '@mui/material'
import { SearchBar } from '../searchBar/SearchBar'
import { Paginator } from 'features/pack/packsList/paginator/Paginator'
import { PacksTable } from 'features/pack/packsList/packsTable/PacksTable'
import { packsListStyle } from 'features/pack/packsList/style'


export const PacksList = () => {
  return (
    <Box sx={packsListStyle}>
      <SearchBar />
      <PacksTable />
      <Paginator />
    </Box>
  )
}
