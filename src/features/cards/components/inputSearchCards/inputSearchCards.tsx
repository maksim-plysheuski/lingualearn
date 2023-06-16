import React from 'react'
import { useSearchCards } from 'features/cards/hooks/useSearchCards'
import { InputSearchName } from 'features/cards/components/inputSearchCards/inputSearchName'
import s from './style.module.scss'

export const InputSearchCards = () => {
  const { fetchCardsName, cardQuestion } = useSearchCards()

  return (
    <div className={s.inputContainer}>
      <InputSearchName valueName={cardQuestion} searchCallback={fetchCardsName} />
    </div>
  )
}

