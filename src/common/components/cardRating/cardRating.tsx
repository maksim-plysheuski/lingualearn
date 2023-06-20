import * as React from 'react'
import Rating from '@mui/material/Rating'
import StarBorderIcon from '@mui/icons-material/StarBorder';

type Props = {
  grade: number
  cardId: string
}

export const CardRating = (props: Props) => {
  return (
    <div>
      <Rating value={props.grade}
              readOnly precision={0.5}
              emptyIcon={<StarBorderIcon sx={{color: '#faaf00'}}/>}
      />
    </div>
  )
}