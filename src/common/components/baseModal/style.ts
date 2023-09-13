import { SxProps, Theme } from '@mui/material/styles'

export const baseModalSx: SxProps<Theme> = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 542,
  color: '#FFFFFF',
  bgcolor: '#171717',
  border: '1px solid #333333',
  borderRadius: '2px 2px 0px 0px',
  pt: 2,
  px: 4,
  pb: 3,
  padding: '0px'
}