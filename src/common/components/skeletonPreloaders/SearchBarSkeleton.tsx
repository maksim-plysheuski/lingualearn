import { Skeleton } from '@mui/material'
import * as React from 'react'
import { searchBarSx } from 'common/components/skeletonPreloaders/style'

export const SearchBarSkeleton = () => {
  return(
    <>
      <Skeleton sx={{ ...searchBarSx, width: 300 }} variant='text' animation='wave' />
      <Skeleton sx={{ ...searchBarSx, width: 228 }} variant='text' animation='wave' />
      <Skeleton sx={{ ...searchBarSx, width: 250 }} variant='text' animation='wave' />
      <Skeleton sx={{ ...searchBarSx, width: 140 }} variant='text' animation='wave' />
    </>
  )
}