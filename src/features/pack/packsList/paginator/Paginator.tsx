import { Box, FormControl, Pagination, Select, SelectChangeEvent } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import { packsThunks } from 'features/pack/packs.slice'
import { useAppDispatch, useAppSelector } from 'common/hooks'


export const Paginator = () => {
  const dispatch = useAppDispatch()
  const currentPage = useAppSelector(state => state.packs.packs.page)
  const packsTotalCount = useAppSelector(state => state.packs.packs.cardPacksTotalCount)
  const rowsInTable = useAppSelector(state => state.packs.packs.pageCount)
  const pagesTotalCount = Math.ceil(packsTotalCount / rowsInTable)


  const handleRowsChange = (event: SelectChangeEvent) => {
    dispatch(packsThunks.getPacks({ page: currentPage, pageCount: Number(event.target.value) }))
  }

  const handlePagesChange = (event: any) => {
    dispatch(packsThunks.getPacks({ page: event.target.textContent, pageCount: rowsInTable }))
  }

  return (
    <Box component={'div'} sx={{ margin: '36px 0 72px 0', width: 1008, display: 'flex', alignItems: 'center' }}>
      <Pagination count={pagesTotalCount}
                  shape='rounded'
                  color='primary'
                  onClick={handlePagesChange} />

      <FormControl sx={{ minWidth: 50, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Box component={'span'} sx={{ marginLeft: '20px' }}>Show</Box>
        <Select
          sx={{ height: '34px', margin: '0 7px 0 7px' }}
          defaultValue={'8'}
          value={rowsInTable ? String(rowsInTable) : '8'}
          onChange={handleRowsChange}
        >
          <MenuItem value={'8'}>8</MenuItem>
          <MenuItem value={'15'}>15</MenuItem>
          <MenuItem value={'25'}>25</MenuItem>
          <MenuItem value={'50'}>50</MenuItem>
        </Select>
        <Box component={'span'}>Cards per page</Box>
      </FormControl>
    </Box>
  )
}