import { SxProps, Theme } from '@mui/material/styles'

export const tableHeaderSx = {
  backgroundColor: '#333333',
}

export const tableSx: SxProps<Theme> = {
  marginTop: '20px',
  maxWidth: 1008,
  backgroundColor: 'black',
  borderColor: '#333333',
  borderStyle: 'solid',
  border: '0px 1px 0px 1px'
}

export const tableCellSx: SxProps<Theme> = {
  wordWrap: 'break-word',
  maxWidth: '200px',
  color: 'white',
  borderBottom: '1px solid #333333',
  padding: '5px 5px 5px 35px',
  height: '55px'
}

export const tableCellHoverSx: SxProps<Theme> = {
  ...tableCellSx,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#333333',
    transition: '300ms ease-in-out',
  }
}

export const tableIconSx: SxProps<Theme> = {
  color: 'white',
  ':disabled': {
    color: '#333333'
  },
  '&:hover': {
    color: '#e66300',
    transition: '300ms ease-in-out',
  }
}