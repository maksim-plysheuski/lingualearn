import { Skeleton } from '@mui/material'
import React from 'react'
import s from './style.module.scss'


const style = { bgcolor: 'grey.900', width: '100%', height: 52 }

export const SkeletonLearnPage = () => {
  return (
    <div className={s.container}>
      <Skeleton sx={{ ...style, paddingBottom: '5px' }} variant='text' animation='wave' />
      <Skeleton sx={{ ...style, height: 30 }} variant='text' animation='wave' />
      <Skeleton sx={{ ...style, height: 25 }} variant='text' animation='wave' />
      <Skeleton sx={{ ...style, height: 55, marginTop: '29px' }} variant='text' animation='wave' />
    </div>
  )
}