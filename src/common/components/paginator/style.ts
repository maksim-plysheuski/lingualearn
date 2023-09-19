export const paginatorStyle = {
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
      },
      '&.Mui-disabled': {
        bgcolor: '#333333',
        color: '#808080',
      }
    }
  }
}

export const selectorStyle = {
  color: 'white',
  height: '36px',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '24px',
  width: '100%',
  border: '1px solid #4C4C4C',
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

export const selectOptionsStyle = {
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