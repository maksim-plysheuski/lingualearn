export const paginationSx = {
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

export const selectorSx = {
  color: 'white',
  bgcolor: '#333333',
  borderColor: 'red',
  height: '34px',
  margin: '0 7px 0 7px',
  '&.Mui-focused': { '& .MuiOutlinedInput-notchedOutline': { borderColor: '#ffffff' } },
  '& .MuiSelect-icon': { color: 'white' }
}

export const selectorMenuSx = {
  '& .Mui-selected': { bgcolor: '#333333' },
  '& .MuiPaper-root': { bgcolor: '#333333' },
  '& .MuiMenuItem-root': {
    bgcolor: '#333333', color: 'white',
    '&: hover': { bgcolor: 'rgba(140,97,255,0.54)' }
  }
}