import React from 'react'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { TableCell } from '@mui/material'
import { SxProps } from '@mui/material/styles'
import s from './style.module.scss'
import { useAppDispatch } from '../../../../../../../common/hooks'
import { EditCardsModal } from '../../../../modal/editCardModal/EditCardModal'

const style: SxProps = {
  width: '80px',
  color: '#fff',
  borderBottom: '1px solid #333333',
  padding: '0'
}
type Props = {
  questionValue: string
  answerValue: string
  cardId: string
}
export const FieldButtons = (props: Props) => {
  const { answerValue, questionValue, cardId } = props
  const dispatch = useAppDispatch()
  const editCardHandler = () => {

  }
  return (
    <TableCell sx={style}>
      <div className={s.iconContainer}>
        <EditCardsModal
          cardId={cardId}
          questionValue={questionValue}
          answerValue={answerValue}
        />
        <div><DeleteOutlineIcon fontSize={'small'} /></div>
      </div>
    </TableCell>
  )
}

