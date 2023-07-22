import { Skeleton } from '@mui/material'
import * as React from 'react'
import { selectorSx } from 'common/components/skeletonPreloaders/style'

export const SelectorSkeleton = () => {
  return(
    <>
      <Skeleton sx={{...selectorSx, width: 40, height: 30}} variant='text'  animation='wave' />
      <Skeleton sx={{...selectorSx, width: 75}} variant='rounded'  animation='wave' />
      <Skeleton sx={{...selectorSx, width: 80, height: 30}} variant='text'  animation='wave' />
    </>
  )
}