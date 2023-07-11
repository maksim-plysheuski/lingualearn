import React from 'react'
import s from 'features/pack/components/packsList/searchBar/resetButton/style.module.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useAppDispatch } from 'common/hooks'
import { setPackParams } from 'features/pack/service/sortPackSlice'

export const ResetButton = () => {
  const dispatch = useAppDispatch()
  const resetSearchParams = () => {
    const reset = {
      min: undefined,
      max: undefined,
      packName: undefined,
      user_id: undefined
    }
    dispatch(setPackParams(reset))
  }

  return (
    <div className={s.container} onClick={resetSearchParams}>
      <DeleteOutlineIcon sx={{ width: '14px', height: '14px' }} />
      <span>Clear Filter</span>
    </div>
  )
}

