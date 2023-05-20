import { Box } from '@mui/material'
import { useEffect } from 'react'
import { useAppDispatch } from 'common/hooks'
import { packsThunks } from 'features/pack/packs.slice'
import { SearchBar } from '../searchBar/SearchBar'
import { Paginator } from 'features/pack/packsList/paginator/Paginator'
import { PacksTable } from 'features/pack/packsList/packsTable/PacksTable'
import { packsListStyle } from 'features/pack/packsList/style'


export const PacksList = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(packsThunks.getPacks({ page: 1, pageCount: 8 }))
  }, [dispatch])

  return (
    <Box sx={packsListStyle}>
      <SearchBar />
      <PacksTable />
      <Paginator />
    </Box>
  )
}
