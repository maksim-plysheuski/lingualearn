import * as React from 'react'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import { SyntheticEvent } from 'react'
import { useAppDispatch } from 'common/hooks'

type Props = {
  grade: number
  cardId: string
}

export const CardRating = (props: Props) => {
  const dispatch = useAppDispatch()

  const changeRatingHandler = (event: SyntheticEvent, newValue: number | null) => {
    /*dispatch(cardsThunks.changeGrade({ card_id: props.cardId, grade: newValue }))*/
  }

  //need to fix

  return (
    <Box sx={{ '& > legend': { mt: 2 } }}>
      {/*<Typography component="legend">Controlled</Typography>*/}
      <Rating name='simple-controlled'
              value={props.grade}
              onChange={(event, newValue) => changeRatingHandler(event, newValue)}
      />
    </Box>
  )
}