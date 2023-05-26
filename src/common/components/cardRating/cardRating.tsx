import * as React from 'react'
import Rating from '@mui/material/Rating'

type Props = {
  grade: number
  cardId: string
}

export const CardRating = (props: Props) => {
  return (
    <div>
      <Rating value={props.grade} readOnly precision={0.5} />
    </div>
  )
}