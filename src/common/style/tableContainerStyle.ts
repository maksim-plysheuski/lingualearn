import { SxProps, Theme } from '@mui/material/styles'

export const tableContainerStyle: SxProps<Theme> = {
  marginTop: '24px',
  maxWidth: 1008,
  backgroundColor: 'black',
  borderColor: '#333333',
  borderStyle: 'solid',
  border: '0px 1px 0px 1px'
}

export const tableCellStyle: SxProps<Theme> = {
  wordWrap: 'break-word',
  maxWidth: '300px',
  color: 'white',
  borderBottom: '1px solid #333333',
  padding: '6px 24px 6px 24px',
  height: '55px'
}

export const tableActionsStyle: SxProps<Theme> = {
  color: 'white',
  ":disabled": {
    color: '#333333'
  },
  '&:hover': {
    color: '#e66300'
  }
}