import React from 'react'
import { EditCardsModal } from 'features/cards/components/modal/editCardModal/EditCardModal'
import { RemoveCardModal } from 'features/cards/components/modal/removeCardModal/removeCardModal'
import IconButton from '@mui/material/IconButton'
import { TableCell, Zoom } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import { iconStyle } from 'features/pack/components/packsList/packsTableBody/actionsButtons/editPack/EditPack'
import { tableCellStyle } from 'features/cards/components/cardsPage/cardsTable/cardsTableBody/CardsTableBody'


type Props = {
  questionValue: string
  answerValue: string
  cardId: string
}
export const FieldButtons = (props: Props) => {
  const { answerValue, questionValue, cardId } = props

  return (
    <TableCell sx={tableCellStyle}>
      <Tooltip title={'Edit card'}
               arrow placement='top'
               TransitionComponent={Zoom}
               TransitionProps={{ timeout: 400 }}>
        <span>
          <IconButton sx={iconStyle}>
            <EditCardsModal cardId={cardId} questionValue={questionValue} answerValue={answerValue} />
        </IconButton>
        </span>
      </Tooltip>
      <Tooltip title={'Delete card'}
               arrow placement='top'
               TransitionComponent={Zoom}
               TransitionProps={{ timeout: 400 }}>
        <span>
          <IconButton sx={iconStyle}>
            <RemoveCardModal cardId={cardId} title={questionValue} />
        </IconButton>
        </span>
      </Tooltip>
    </TableCell>
  )
}

