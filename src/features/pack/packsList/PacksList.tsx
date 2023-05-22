import { Box } from '@mui/material'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { packsThunks } from 'features/pack/packs.slice'
import { SearchBar } from '../searchBar/SearchBar'
import { Paginator } from 'features/pack/packsList/paginator/Paginator'
import { PacksTable } from 'features/pack/packsList/packsTable/PacksTable'
import { packsListStyle } from 'features/pack/packsList/style'


export const PacksList = () => {
  const dispatch = useAppDispatch()
  const packParams = useAppSelector(state => state.packs.packParams)

  useEffect(() => {
    dispatch(packsThunks.getPacks(packParams))
  }, [packParams])

  return (
    <Box sx={packsListStyle}>
      <SearchBar />
      <PacksTable />
      <Paginator />
    </Box>
  )
}
