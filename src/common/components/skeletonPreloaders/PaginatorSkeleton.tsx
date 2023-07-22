import { Skeleton } from '@mui/material'
import * as React from 'react'
import { paginatorSx } from 'common/components/skeletonPreloaders/style'

export const PaginatorSkeleton = () => {
  return(
    <>
      <Skeleton sx={paginatorSx} variant='rounded'  animation='wave' />
      <Skeleton sx={paginatorSx} variant='rounded'  animation='wave' />
      <Skeleton sx={paginatorSx} variant='rounded'  animation='wave' />
      <Skeleton sx={paginatorSx} variant='rounded'  animation='wave' />
      <Skeleton sx={paginatorSx} variant='rounded'  animation='wave' />
      <Skeleton sx={paginatorSx} variant='rounded'  animation='wave' />
    </>
  )
}