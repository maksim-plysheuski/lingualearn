import React from 'react'
import { useSearchCards } from 'features/cards/hooks/useSearchCards'
import s from 'features/cards/components/cardsPage/inputSearchCards/style.module.scss'
import { InputSearch } from 'common/components/Inputs/inputSearch/inputSearch'

export const InputSearchCards = () => {
  const { fetchCardsName, cardQuestion } = useSearchCards()

  return (
    <div className={s.inputContainer}>
      <InputSearch valueName={cardQuestion} searchNameCallback={fetchCardsName} />
    </div>
  )
}

