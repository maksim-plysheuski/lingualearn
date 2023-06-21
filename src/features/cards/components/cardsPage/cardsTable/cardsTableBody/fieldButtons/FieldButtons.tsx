import React from 'react'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { TableCell } from '@mui/material'
import { SxProps } from '@mui/material/styles'
import s from './style.module.scss'


const style: SxProps = {
  width:'80px',
  color: '#fff',
  borderBottom: '1px solid #333333',
  padding: '0',
}
export const FieldButtons = () => {
  return (
    <TableCell sx={style}>
      <div className={s.iconContainer}>
        <div><DriveFileRenameOutlineIcon fontSize={'small'}/></div>
        <div><DeleteOutlineIcon fontSize={'small'}/></div>
      </div>
    </TableCell>
  )
}

