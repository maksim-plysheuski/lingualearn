import React from 'react'
import { TableCell, Zoom } from '@mui/material'
import { EditCardsModal } from 'features/cards/components/modal/editCardModal/EditCardModal'
import { RemoveCardModal } from 'features/cards/components/modal/removeCardModal/removeCardModal'
import { tableActionsStyle, tableCellStyle } from 'common/style/tableStyle'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'

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
    <TableCell sx={tableCellStyle}>
        <Tooltip title={'Edit card'}
                 arrow placement='top'
                 TransitionComponent={Zoom}
                 TransitionProps={{ timeout: 400 }}>
        <span>
          <IconButton sx={tableActionsStyle}>
            <EditCardsModal
              cardId={cardId}
              questionValue={questionValue}
              answerValue={answerValue}
              answerImgValue={answerImg}
              questionImgValue={questionImg}
            />
        </IconButton>
        </span>
        </Tooltip>
        <Tooltip title={'Delete card'}
                 arrow placement='top'
                 TransitionComponent={Zoom}
                 TransitionProps={{ timeout: 400 }}>
        <span>
          <IconButton sx={tableActionsStyle}>
            <RemoveCardModal cardId={cardId} title={questionValue} />
        </IconButton>
        </span>
        </Tooltip>
    </TableCell>
  )
}

