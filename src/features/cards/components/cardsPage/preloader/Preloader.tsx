import s from './style.module.scss'
import CircularProgress from '@mui/material/CircularProgress'
import * as React from 'react'

export const Preloader = () => {
  return (
    <div className={s.container}>
      <div className={s.loader}>
        <CircularProgress size={300}  sx={{ color: '#e66300'}} />
      </div>

    </div>
  )
}