import { Skeleton } from '@mui/material'
import * as React from 'react'
import { skeletonSx } from 'common/components/skeletonPreloaders/style'

export const TitleBlockSkeleton = () => {
  return(
    <>
      <Skeleton sx={{ ...skeletonSx, width: 162, height: 58 }} variant='text' animation='wave' />
      <Skeleton sx={{ ...skeletonSx, width: 175, height: 58 }} variant='text' animation='wave' />
    </>
  )
}