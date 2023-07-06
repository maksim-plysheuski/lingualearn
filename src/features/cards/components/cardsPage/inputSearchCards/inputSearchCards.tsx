import React from 'react'
import s from 'features/cards/components/cardsPage/inputSearchCards/style.module.scss'
import { InputSearch } from 'common/components/Inputs/inputSearch/inputSearch'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { setCardParams } from 'features/cards/service'

export const InputSearchCards = () => {
  const dispatch = useAppDispatch()
  const cardQuestion = useAppSelector(state => state.paramsCard.cardQuestion!)

  const searchCard = (cardQuestion: string) => {
    const question = cardQuestion ? cardQuestion : undefined
    dispatch(setCardParams({ cardQuestion: question }))
  }

  return (
    <div className={s.inputContainer}>
      <InputSearch valueName={cardQuestion} searchCallback={searchCard} />
    </div>
  )
}

