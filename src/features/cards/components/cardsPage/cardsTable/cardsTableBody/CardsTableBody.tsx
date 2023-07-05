import { TableBody, TableCell, TableRow } from '@mui/material'
import { useAppSelector } from 'common/hooks'
import { selectCards, selectIsMyCard } from 'features/cards/selectors'
import React from 'react'
import Rating from '@mui/material/Rating'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import { FieldButtons } from './fieldButtons/FieldButtons'
import { useSelector } from 'react-redux'
import { tableCellHoverStyle, tableCellStyle } from 'common/style/tableStyle'


export const CardsTableBody = () => {
  const cards = useAppSelector(selectCards)
  const isMyCard = useSelector(selectIsMyCard)

  return (
    <TableBody>
      {cards?.map((card) => {
        const dataUpdate = card.updated.slice(0, 10).split('-').reverse().join('.')
        return (
          <TableRow key={card._id}>
            <TableCell sx={tableCellHoverStyle}>
              {card.questionImg
                ? <img style={{ height: '36px' }} src={card.questionImg} alt={'cover'} />
                : card.question}
            </TableCell>
            <TableCell sx={tableCellHoverStyle}>
              {card.answerImg
                ? <img style={{ height: '36px' }} src={card.answerImg} alt={'cover'} />
                : card.answer}
            </TableCell>
            <TableCell sx={tableCellStyle}>{dataUpdate}</TableCell>
            <TableCell sx={tableCellStyle}>
              <Rating value={card.grade} readOnly precision={0.5}
                      emptyIcon={<StarBorderIcon sx={{ color: '#faaf00' }} />} />
            </TableCell>
            {isMyCard && <FieldButtons cardId={card._id}
                                       questionValue={card.question}
                                       answerValue={card.answer}
                                       questionImg={card.questionImg}
                                       answerImg={card.answerImg} />}
          </TableRow>
        )
      })}
    </TableBody>
  )
}



