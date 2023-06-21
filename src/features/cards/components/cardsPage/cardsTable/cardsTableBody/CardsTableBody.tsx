import { TableBody, TableCell, TableRow } from '@mui/material'
import { useAppSelector } from 'common/hooks'
import { selectCards, selectWhoseCards } from 'features/cards/selectors'
import React from 'react'
import Rating from '@mui/material/Rating'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import { FieldButtons } from './fieldButtons/FieldButtons'
import { useSelector } from 'react-redux'

export const tableCellStyle = {
  wordWrap: 'break-word',
  minWidth: '100px',
  maxWidth: '300px',
  color: 'white',
  borderBottom: '1px solid #333333',
  height: '36px',
  padding: '2px 0 2px 24px'
}

export const CardsTableBody = () => {
  const cards = useAppSelector(selectCards)
  const whoseCards = useSelector(selectWhoseCards)
  return (
    <TableBody>
      {cards?.map((card) => {
        const dataUpdate = card.updated.slice(0, 10).split('-').reverse().join('.')
        return (
          <TableRow key={card._id}>
            <TableCell sx={tableCellStyle}>{card.question}</TableCell>
            <TableCell sx={tableCellStyle}>{card.answer}</TableCell>
            <TableCell sx={tableCellStyle}>{dataUpdate}</TableCell>
            <TableCell sx={tableCellStyle}>
              <Rating value={card.grade} readOnly precision={0.5}
                      emptyIcon={<StarBorderIcon sx={{ color: '#faaf00' }} />} />
            </TableCell>
            {whoseCards && <FieldButtons cardId={card._id} questionValue={card.question} answerValue={card.answer} />}
          </TableRow>
        )
      })}
    </TableBody>
  )
}



