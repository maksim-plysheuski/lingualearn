import { TableBody, TableCell, TableRow } from '@mui/material'
import { useAppSelector } from 'common/hooks'
import { ActionsButtons } from 'features/pack/packsList/packsTable/packsTableBody/actionsButtons/ActionsButtons'

export const CardsTableBody = () => {
  const cards = useAppSelector(state => state.cards.cards)
  const tableCellStyle = {
    wordWrap: 'break-word',
    minWidth: '150px',
    maxWidth: '200px'
  }


  console.log(cards)
  return (
    <TableBody>
      {cards.cards?.map((card) => (
        <TableRow key={card._id}>
          <TableCell sx={{
            ...tableCellStyle,
            paddingLeft: '40px',
            cursor: 'pointer',
            ':hover': { backgroundColor: 'rgb(245, 245, 245)' }
          }}>
            {card.question}
          </TableCell>
          <TableCell sx={{ tableCellStyle }}>{card.answer}</TableCell>
          <TableCell sx={{ tableCellStyle }}>{card.updated.slice(0, 10).replaceAll('-', '.')}</TableCell>
          <TableCell sx={{ tableCellStyle }}>Rating Need To fix</TableCell>
          <ActionsButtons packId={card.user_id} />
        </TableRow>
      ))}
    </TableBody>
  )
}


