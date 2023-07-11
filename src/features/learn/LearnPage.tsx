import React, { useEffect, useState } from 'react'
import s from './style.module.scss'
import { Answer } from 'features/learn/answer/answer'
import { CardsT, useChangeGradeCardMutation } from 'features/cards/service'
import { getCard } from 'features/learn/getRandomCard'
import { useFetchAllCards } from 'features/learn/useFetchAllCards'


export const LearnPage = () => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false)
  const [grade, setGrade] = useState<number | null>(null)

  const { data, isFetching, packId } = useFetchAllCards()
  const [changeGrade, { isLoading }] = useChangeGradeCardMutation()

  const [card, setCard] = useState<CardsT>(getCard(data!.cards))

  const nextAnswer = () => {
    setShowAnswer(false)
    changeGrade({ card_id: card?._id!, grade: grade!, packId: packId! })
  }
  useEffect(() => setCard(getCard(data!.cards)), [data!.cards])

  if (isLoading || isFetching) return <h1></h1>

  return (
    <div className={s.learnContainer}>
      <h2 className={s.title}>Learn: '{data!.packName}'</h2>
      <div className={s.questionContainer}>
        <div className={s.question}><span>Question:</span> {card?.question}</div>
        <p>Количество попыток ответов на вопрос: {card?.shots}</p>
      </div>
      {!showAnswer && <button className={s.button} onClick={() => setShowAnswer(true)}>Show Answer</button>}
      {showAnswer && <Answer setGrade={setGrade} grade={grade} answer={'card.answer'} nextAnswer={nextAnswer} />}
    </div>
  )
}

