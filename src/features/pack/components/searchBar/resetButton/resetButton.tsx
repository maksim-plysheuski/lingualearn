import React from 'react'
import s from 'features/pack/components/searchBar/resetButton/style.module.scss'
import { useSearchPaks } from 'features/pack/hook/useSearchPaks'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

export const ResetButton = () => {
  const { resetSearchParams } = useSearchPaks()
  return (
    <div className={s.container}
         onClick={resetSearchParams}
    >
      <DeleteOutlineIcon sx={{width:'14px',height:'14px'}} />
      <span>Clear Filter</span>
    </div>
  )
}

