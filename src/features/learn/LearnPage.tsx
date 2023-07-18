import React, { useEffect, useState } from 'react'
import s from './style.module.scss'
import { Answer } from 'features/learn/answer/answer'
import { CardsT, useChangeGradeCardMutation } from 'features/cards/service'
import { getCard } from 'features/learn/getRandomCard'
import { useFetchAllCards } from 'features/learn/useFetchAllCards'
import { SuperButton } from 'common/components/superButton/SuperButton'


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
  const set = data!.cards
  useEffect(() => {
    setCard(getCard(set))
  }, [set])

  if (isLoading || isFetching) return null

  return (
    <div className={s.learnContainer}>
      <h2 className={s.title}>Learn: '{data!.packName}'</h2>
      <div className={s.questionContainer}>
        <div className={s.question}><span>Question:</span> {card?.question}</div>
        <span className={s.attemptsCount}>Count of attempts to answer that question: <b>{card.shots}</b></span>
      </div>
      {!showAnswer && <SuperButton title={'Show Answer'} marginTop={'41px'} onClick={() => setShowAnswer(true)} />}
      {showAnswer && <Answer setGrade={setGrade} grade={grade} answer={card?.answer} nextAnswer={nextAnswer} />}
    </div>
  )
}

