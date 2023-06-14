import React from 'react'
import { useSearchCards } from 'features/cards/hooks/useSearchCards'
import { InputSearchName } from 'features/cards/components/inputSearchCards/inputSearchName'

export const InputSearchCards = () => {
  const { fetchCardsName, cardQuestion } = useSearchCards()

  return (
    <div>
      <InputSearchName valueName={cardQuestion} searchCallback={fetchCardsName} />
    </div>
  )
}

