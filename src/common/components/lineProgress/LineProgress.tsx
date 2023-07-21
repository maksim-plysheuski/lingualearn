import Stack from '@mui/material/Stack/Stack'
import LinearProgress from '@mui/material/LinearProgress/LinearProgress'
import { useAppSelector } from 'common/hooks'
import { loadingSelect } from 'app'

const lineProgressSx = { position: 'absolute', top: '60px', width: '100%', bgcolor: '#664400' }
export const LinearProgressColors = () => {
  const isLoading = useAppSelector(loadingSelect)
  return (
    <>
      {isLoading && <LinearProgress sx={lineProgressSx} color={'warning'} />}
    </>
  )
}