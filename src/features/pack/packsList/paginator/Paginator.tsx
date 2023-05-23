import { Pagination, Select, SelectChangeEvent } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import { packsThunks } from 'features/pack/packs.slice'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import s from './style.module.scss'


export const Paginator = () => {
  const dispatch = useAppDispatch()
  const currentPage = useAppSelector(state => state.packs.packs.page)
  const packsTotalCount = useAppSelector(state => state.packs.packs.cardPacksTotalCount)
  const rowsInTable = useAppSelector(state => state.packs.packs.pageCount)
  const pagesTotalCount = Math.ceil(packsTotalCount / rowsInTable) || 0


  const handleRowsChange = (event: SelectChangeEvent) => {
    dispatch(packsThunks.getPacks({ page: currentPage, pageCount: Number(event.target.value) }))
  }

  const handlePagesChange = (event: any) => {
    dispatch(packsThunks.getPacks({ page: event.target.textContent, pageCount: rowsInTable }))
  }

  return (
    <div className={s.container}>
      <Pagination shape='rounded' color='primary' count={pagesTotalCount} onClick={handlePagesChange} />
      <span>Show</span>
      <Select
        sx={{ height: '34px', margin: '0 7px 0 7px' }}
        value={rowsInTable ? String(rowsInTable) : '4'}
        onChange={handleRowsChange}
      >
        <MenuItem value={'4'}>4</MenuItem>
        <MenuItem value={'15'}>15</MenuItem>
        <MenuItem value={'25'}>25</MenuItem>
        <MenuItem value={'50'}>50</MenuItem>
      </Select>
      <span>Cards per page</span>
    </div>
  )
}