import { Pagination, Select, SelectChangeEvent } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import s from 'common/components/paginator/style.module.scss'

type Props = {
  pageCount: number
  page: number
  totalCount: number
  getNewPage: (page: number, size: number) => void
}

export const Paginator = (props: Props) => {
  const { pageCount, totalCount, page, getNewPage } = props
  const paginationHandler = (event: React.ChangeEvent<unknown>, page: number) => {
    getNewPage(page, pageCount)
  }

  const selectHandler = (event: SelectChangeEvent) => {
    const size = +event.target.value
    getNewPage(page, size)
  }

  return (
    <div className={s.container}>
      <Pagination
        shape='rounded'
        color='primary'
        count={Math.ceil(totalCount / pageCount) || 0}
        page={page}
        onChange={paginationHandler}
      />
      <span>Show</span>
      <Select
        sx={{ height: '34px', margin: '0 7px 0 7px' }}
        value={pageCount ? String(pageCount) : '4'}
        onChange={selectHandler}
      >
        <MenuItem value={'4'}>4</MenuItem>
        <MenuItem value={'8'}>8</MenuItem>
        <MenuItem value={'12'}>12</MenuItem>
      </Select>
      <span>{`${pageCount} per page`}</span>
    </div>
  )
}