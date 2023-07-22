import React from 'react'
import { TableCell, Zoom } from '@mui/material'
import { EditCardsModal } from 'features/cards/components/modal/editCardModal/EditCardModal'
import { RemoveCardModal } from 'features/cards/components/modal/removeCardModal/removeCardModal'
import { tableIconSx, tableCellSx } from 'features/pack/components/packsList/packsTable/tableStyles'
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
    <TableCell sx={tableCellSx}>
        <Tooltip title={'Edit card'}
                 arrow placement='top'
                 TransitionComponent={Zoom}
                 TransitionProps={{ timeout: 400 }}>
        <span>
          <IconButton sx={tableIconSx}>
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
          <IconButton sx={tableIconSx}>
            <RemoveCardModal cardId={cardId} title={questionValue} />
        </IconButton>
        </span>
        </Tooltip>
    </TableCell>
  )
}

