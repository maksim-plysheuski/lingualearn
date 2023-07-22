import { Skeleton } from '@mui/material'
import * as React from 'react'
import { skeletonSx } from 'common/components/skeletonPreloaders/style'

export const TitleBlockSkeleton = () => {
  return(
    <>
      <Skeleton sx={{ ...skeletonSx, width: 150, height: 55 }} variant='text' animation='wave' />
      <Skeleton sx={{ ...skeletonSx, width: 175, height: 55 }} variant='text' animation='wave' />
    </>
  )
}