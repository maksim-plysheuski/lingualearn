import React from 'react'
import { TableCell } from '@mui/material'
import { SxProps } from '@mui/material/styles'
import s from './style.module.scss'
import { EditCardsModal } from 'features/cards/components/modal/editCardModal/EditCardModal'
import { RemoveCardModal } from 'features/cards/components/modal/removeCardModal/removeCardModal'

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
  questionImg?: string
  answerImg?: string
}
export const FieldButtons = (props: Props) => {
  const { answerValue, questionValue, questionImg, answerImg, cardId } = props

  return (
    <TableCell sx={style}>
      <div className={s.iconContainer}>
        <EditCardsModal
          cardId={cardId}
          questionValue={questionValue}
          answerValue={answerValue}
          answerImgValue={answerImg}
          questionImgValue={questionImg}
        />
        <RemoveCardModal cardId={cardId} title={questionValue} />
      </div>
    </TableCell>
  )
}

