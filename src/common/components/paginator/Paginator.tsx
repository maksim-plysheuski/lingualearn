import { Pagination, Select, SelectChangeEvent } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import s from 'common/components/paginator/style.module.scss'

type Props = {
  pageSize: number
  currentPage: number
  countPage: number
  getNewPage: (page: number, size: number) => void
}

export const Paginator = (props: Props) => {
  const { pageSize, countPage, currentPage, getNewPage } = props
  debugger
  const paginationHandler = (event: React.ChangeEvent<unknown>, page: number) => {
    getNewPage(page, pageSize)
  }

  const selectHandler = (event: SelectChangeEvent) => {
    const size = +event.target.value
    getNewPage(currentPage, size)
  }

  return (
    <div className={s.container}>
      <Pagination
        shape='rounded'
        color='primary'
        count={countPage}
        page={currentPage}
        onChange={paginationHandler}
      />
      <span>Show</span>
      <Select
        sx={{ height: '34px', margin: '0 7px 0 7px' }}
        value={pageSize ? String(pageSize) : '4'}
        onChange={selectHandler}
      >
        <MenuItem value={'4'}>4</MenuItem>
        <MenuItem value={'8'}>8</MenuItem>
        <MenuItem value={'12'}>12</MenuItem>
      </Select>
      <span>{`${pageSize} per page`}</span>
    </div>
  )
}