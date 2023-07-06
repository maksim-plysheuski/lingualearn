import React from 'react'
import { TableCell } from '@mui/material'
import { SxProps } from '@mui/material/styles'
import s from 'features/cards/components/cardsPage/cardsTable/cardsTableBody/fieldButtons/style.module.scss'
import { useAppDispatch } from 'common/hooks'
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
}
export const FieldButtons = (props: Props) => {
  const { answerValue, questionValue, cardId } = props
  const dispatch = useAppDispatch()
  const editCardHandler = () => {

  }
  return (
      <div className={s.iconContainer}>
        <EditCardsModal
          cardId={cardId}
          questionValue={questionValue}
          answerValue={answerValue}
        />
        <RemoveCardModal cardId={cardId} title={questionValue} />
      </div>
  )
}

