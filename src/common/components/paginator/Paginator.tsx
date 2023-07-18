import { Pagination, Select, SelectChangeEvent } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import s from 'common/components/paginator/style.module.scss'
import { ChangeEvent } from 'react'

type Props = {
  pageCount: number
  page: number
  totalCount: number
  getNewPage: (page: number, size: number) => void
}

const paginationSx = {
  '& .MuiPaginationItem-root': {
    color: '#ffffff'
  },
  button: {
    bgcolor: 'transparent',
    '&: hover': { bgcolor: '#333333' },
    '&.Mui-selected': {
      bgcolor: '#ffffff',
      color: '#000000',
      '&: hover': {
        bgcolor: '#333333',
        color: '#ffffff'
      }
    }
  }
}

const selectorSx = {
  color: 'white',
  height: '36px',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '24px',
  border: '1px solid #4C4C4C',
  width: '60px',
  ml: 1,
  mr: 1,
  '&:hover': {
    bgcolor: '#333333',
    borderColor: '#808080'
  },
  '&.Mui-focused': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ffffff'
    }
  },
  '& .MuiSelect-icon': {
    color: 'white'
  }
}

const selectorMenuSx = {
  '& .MuiPaper-root': {
    bgcolor: '#333333'
  },
  '& .Mui-selected': {
    bgcolor: 'transparent'
  },
  '& .MuiMenuItem-root': {
    color: 'white',
    bgcolor: 'transparent',
    '&: hover': {
      bgcolor: '#8C61FF'
    }
  }
}


export const Paginator = (props: Props) => {
  const { pageCount, totalCount, page, getNewPage } = props
  const paginationHandler = (event: ChangeEvent<unknown>, page: number) => {
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