import { Pagination, Select, SelectChangeEvent } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import s from './style.module.scss'
import { ChangeEvent, memo } from 'react'
import { paginatorStyle, selectOptionsStyle, selectorStyle } from 'common/components/paginator/style'

type Props = {
  pageCount: number
  page: number
  totalCount: number
  getNewPage: (page: number, size: number) => void
  isFetching?: boolean
}

export const Paginator = memo((props: Props) => {
  const { pageCount, totalCount, page, getNewPage, isFetching } = props

  const paginationHandler = (event: ChangeEvent<unknown>, page: number) => getNewPage(page, pageCount)
  const selectHandler = (event: SelectChangeEvent) => getNewPage(page, +event.target.value)

  return (
    <div className={s.container}>
      <Pagination
        disabled={isFetching}
        shape='rounded'
        variant={'text'}
        sx={paginatorStyle}
        count={Math.ceil(totalCount / pageCount) || 0}
        page={page}
        onChange={paginationHandler}
      />
      <div>
        <span>Show</span>
        <Select
          sx={{ ...selectorStyle, width: '75px', ml: 1, mr: 1 }}
          value={pageCount ? String(pageCount) : '4'}
          onChange={selectHandler}
          name={'packs-selector'}
          MenuProps={{ sx: selectOptionsStyle }}
        >
          <MenuItem value={'4'}>4</MenuItem>
          <MenuItem value={'8'}>8</MenuItem>
          <MenuItem value={'12'}>12</MenuItem>
          <MenuItem value={'25'}>25</MenuItem>
        </Select>
        <span>packs per page</span>
      </div>
    </div>
  )
})