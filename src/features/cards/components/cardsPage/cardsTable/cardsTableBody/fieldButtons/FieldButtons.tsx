import React from 'react'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { TableCell } from '@mui/material'
import { SxProps } from '@mui/material/styles'
import s from './style.module.scss'
import { AddEditCardsModal } from '../../../../modal/addEditCard/addEditCardModal/AddEditCardsModal'
import { useAppDispatch } from '../../../../../../../common/hooks'

const style: SxProps = {
  width: '80px',
  color: '#fff',
  borderBottom: '1px solid #333333',
  padding: '0'
}
export const FieldButtons = () => {
  const dispatch = useAppDispatch()
  const editCardHandler = () => {

  }
  return (
    <TableCell sx={style}>
      <div className={s.iconCntainer}>
        <AddEditCardsModal
          callback={editCardHandler} title={'Edit Card'}
          fieldOpen={<DriveFileRenameOutlineIcon fontSize={'small'} />}
        />
        <div><DeleteOutlineIcon fontSize={'small'} /></div>
      </div>
    </TableCell>
  )
}

