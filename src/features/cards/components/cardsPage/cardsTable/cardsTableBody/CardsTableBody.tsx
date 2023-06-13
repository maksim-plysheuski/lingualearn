import { TableBody, TableCell, TableRow } from '@mui/material'
import { useAppSelector } from 'common/hooks'
import { CardRating } from 'common/components/cardRating/cardRating'
import { selectCards } from 'features/cards/selectors'

export const CardsTableBody = () => {

  const cards = useAppSelector(selectCards)
  const tableCellStyle = {
    wordWrap: 'break-word',
    minWidth: '150px',
    maxWidth: '200px'
  }

  return (
    <TableBody>
      {cards?.map((card) => (
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
          <TableCell sx={{ tableCellStyle }}>
            <CardRating grade={card.grade} cardId={card._id} />
          </TableCell>
          {/* <ActionsButtons itemId={card.user_id} pack={card} handleOpenModal={() => console.log('need to fix')}/>*/}
        </TableRow>
      ))}
    </TableBody>
  )
}



