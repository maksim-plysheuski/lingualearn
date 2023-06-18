import { TableBody, TableCell, TableRow } from '@mui/material'
import { useAppSelector } from 'common/hooks'
import { CardRating } from 'common/components/cardRating/cardRating'
import { selectCards } from 'features/cards/selectors'
import { tableCellStyle } from 'features/pack/components/packsList/packsTable/packsTableBody/PacksTableBody'

export const CardsTableBody = () => {
  const cards = useAppSelector(selectCards)

  return (
    <TableBody>
      {cards?.map((card) => (
        <TableRow key={card._id}>
          <TableCell sx={{
            ...tableCellStyle,
            paddingLeft: '40px',
            cursor: 'pointer',
            ':hover': { backgroundColor: '#333333' }
          }}>
            {card.question}
          </TableCell>
          <TableCell sx={tableCellStyle}>{card.answer}</TableCell>
          <TableCell sx={tableCellStyle}>{card.updated.slice(0, 10).replaceAll('-', '.')}</TableCell>
          <TableCell sx={tableCellStyle}>
            <CardRating grade={card.grade} cardId={card._id} />
          </TableCell>
          {/* <ActionsButtons itemId={card.user_id} pack={card} handleOpenModal={() => console.log('need to fix')}/>*/}
        </TableRow>
      ))}
    </TableBody>
  )
}



