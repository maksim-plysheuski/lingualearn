export const menuStyle = {
  '& .MuiPaper-root': {
    bgcolor: '#171717',
    border: '1px solid #333333',
    marginTop: 2,
    minWidth: 80,
    color: '#fff',
    '&:before': {
      bgcolor: '#171717',
      border: '1px solid #333333',
      borderBottom: 0,
      borderRight: 0
    },
    '& .MuiAvatar-root': {
      ml: '16px',
      width: 40,
      height: 40
    },
    '& .MuiDivider-root': {
      bgcolor: '#333333',
      mr: 2,
      ml: 2
    },
    '& .MuiMenuItem-root': {
      mt: 1.2,
      fontSize: 15,
      '&:hover': {
        bgcolor: '#333333'
      },
      '& .MuiSvgIcon-root': {
        color: '#fff',
        fontSize: 22
      }
    }
  }
}

export const paperStyle = {
  elevation: 0,
  sx: {
    overflow: 'visible',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    mt: 1.5,
    '& .MuiAvatar-root': {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1
    },
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: 'background.paper',
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0
    }
  }
}