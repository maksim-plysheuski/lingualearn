import { TableBody, TableCell, TableRow } from '@mui/material'
import { selectIsMyCard } from 'features/cards/selectors'
import React, { useEffect } from 'react'
import Rating from '@mui/material/Rating'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import { FieldButtons } from './fieldButtons/FieldButtons'
import { useSelector } from 'react-redux'
import { tableCellHoverSx, tableCellSx } from 'features/pack/components/packsList/packsTable/tableStyles'
import { useGetCards } from 'features/cards/hooks/useGetCards'
import { useParams } from 'react-router-dom'
import { setCardsParams } from 'features/cards/service/cards.params.slice'
import { useAppDispatch } from 'common/hooks'


export const CardsTableBody = () => {
  const dispatch = useAppDispatch()
  const isMyCard = useSelector(selectIsMyCard)
  const { data } = useGetCards()
  const { cardsPack_id } = useParams<{ cardsPack_id: string }>()

  useEffect(() => {
    if (cardsPack_id) {
      dispatch(setCardsParams({ cardsPack_id }))
    }
  }, [])


  return (
    <TableBody>
      {data?.cards.map((card) => {
        const dataUpdate = card.updated.slice(0, 10).split('-').reverse().join('.')
        return (
          <TableRow key={card._id}>
            <TableCell sx={tableCellHoverSx}>
              {card.questionImg
                ? <img style={{ height: '36px' }} src={card.questionImg} alt={'cover'} />
                : card.question}
            </TableCell>
            <TableCell sx={tableCellHoverSx}>
              {card.answerImg
                ? <img style={{ height: '36px' }} src={card.answerImg} alt={'cover'} />
                : card.answer}
            </TableCell>
            <TableCell sx={tableCellSx}>{dataUpdate}</TableCell>
            <TableCell sx={tableCellSx}>
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
