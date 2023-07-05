import React from 'react'
import s from 'features/pack/components/searchBar/resetButton/style.module.scss'
import { useSearchPacks } from 'features/pack/hook/useSearchPacks'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

export const ResetButton = () => {
  const { resetSearchParams } = useSearchPacks()
  return (
    <div className={s.container}
         onClick={resetSearchParams}
    >
      <DeleteOutlineIcon sx={{width:'14px',height:'14px'}} />
      <span>Clear Filter</span>
    </div>
  )
}

