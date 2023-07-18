import { TableBody, TableCell, TableRow } from '@mui/material'
import { useAppSelector } from 'common/hooks'
import React from 'react'
import Rating from '@mui/material/Rating'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import { useFetchCards } from 'features/cards/service'
import { FieldButtons } from 'features/cards/components/cardsPage/cardsTable/cardsTableBody/fieldButtons/FieldButtons'
import { userIdSelect } from 'features/profile'

export const tableCellStyle = {
  wordWrap: 'break-word',
  maxWidth: '250px',
  color: 'white',
  borderBottom: '1px solid #333333',
  padding: '6px 24px 6px 24px',
  height: '55px'
}

export const CardsTableBody = () => {

  const userId = useAppSelector(userIdSelect)
  const { data } = useFetchCards()

  const show = userId === data?.packUserId

  return (
    <TableBody>
      {data?.cards.map((card) => {
        const dataUpdate = card.updated.slice(0, 10).split('-').reverse().join('.')
        return (
          <TableRow key={card._id}>
            <TableCell sx={tableCellStyle}>{card.question}</TableCell>
            <TableCell sx={tableCellStyle}>{card.answer}</TableCell>
            <TableCell sx={tableCellStyle}>{dataUpdate}</TableCell>
            <TableCell sx={tableCellStyle}>
              <Rating value={card.grade} readOnly precision={0.5}
                      emptyIcon={<StarBorderIcon sx={{ color: '#faaf00' }} />}
              />
            </TableCell>
            {show && <FieldButtons cardId={card._id} questionValue={card.question} answerValue={card.answer} />}
          </TableRow>
        )
      })}
    </TableBody>
  )
}



