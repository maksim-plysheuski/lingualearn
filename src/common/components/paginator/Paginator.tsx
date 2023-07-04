import { Pagination, Select, SelectChangeEvent } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import s from 'common/components/paginator/style.module.scss'

type Props = {
  pageCount: number
  page: number
  totalCount: number
  getNewPage: (page: number, size: number) => void
}

const paginationSx = {
  '& .MuiPaginationItem-root': {
    color: 'white'
  },
  button: {
    bgcolor: '#333333',
    '&: hover': { bgcolor: 'rgba(140,97,255,0.54)' },
    '&.Mui-selected': {
      bgcolor: '#8C61FF',
      '&: hover': { bgcolor: 'rgba(140,97,255,0.54)' }
    }
  }
}

const selectorSx = {
  color: 'white',
  bgcolor: '#333333',
  borderColor: 'red',
  height: '34px',
  margin: '0 7px 0 7px',
  '&.Mui-focused': { '& .MuiOutlinedInput-notchedOutline': { borderColor: '#8C61FF' } },
  '& .MuiSelect-icon': { color: 'white' }
}

const selectorMenuSx = {
  '& .Mui-selected': { bgcolor: '#333333' },
  '& .MuiPaper-root': { bgcolor: '#333333' },
  '& .MuiMenuItem-root': {
    bgcolor: '#333333', color: 'white',
    '&: hover': { bgcolor: 'rgba(140,97,255,0.54)' }
  }
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
        variant={'text'}
        sx={paginationSx}
        count={Math.ceil(totalCount / pageCount) || 0}
        onChange={paginationHandler}
        defaultValue={page}
      />
      <div>
        <span>Show</span>
        <Select
          sx={selectorSx}
          defaultValue={String(pageCount)}
          onChange={selectHandler}
          MenuProps={{ sx: selectorMenuSx }}
        >
          <MenuItem value={'4'}>4</MenuItem>
          <MenuItem value={'8'}>8</MenuItem>
          <MenuItem value={'12'}>12</MenuItem>
        </Select>
        <span>per page</span>
      </div>
    </div>
  )
}