import LinearProgress from '@mui/material/LinearProgress/LinearProgress'
import { useAppSelector } from 'common/hooks'
import { selectIsAppLoading } from 'app'

const lineProgressSx = { position: 'absolute', top: '60px', width: '100%', bgcolor: '#664400' }

export const LinearProgressColors = () => {
  const isLoading = useAppSelector(selectIsAppLoading)
  return (
    <>
      {isLoading && <LinearProgress sx={lineProgressSx} color={'warning'} />}
    </>
  )
}