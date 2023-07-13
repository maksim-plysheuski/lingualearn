import React from 'react'
import { LinearProgress } from '@mui/material'
import { useAppSelector } from 'common/hooks'

export const Linear = () => {
  const isLoading = useAppSelector(state => state.app.isLoading)
  return (
    <>
      {isLoading && <LinearProgress sx={{ position: 'absolute', top: '60px', width: '100%', bgcolor: '#664400' }}
                                    color={'warning'} />
      }
    </>
  )
}

