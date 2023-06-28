import React, { useEffect, useState } from 'react'
import { getCard } from 'features/learn/getRandomCard'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { selectCards, selectCardsPack_id, selectPackName } from 'features/cards/selectors'
import { cardsAction, cardsThunks } from 'features/cards/cards.slice'
import { useParams } from 'react-router-dom'
import s from './style.module.scss'
import { TCard } from 'features/cards/cardsApi'
import { Answer } from 'features/learn/answer/answer'


export const LearnPage = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()

  const cards = useAppSelector(selectCards)
  const packName = useAppSelector(selectPackName)
  const cardParamsId = useAppSelector(selectCardsPack_id)
  const [card, setCard] = useState<TCard>()
  const [showAnswer, setShowAnswer] = useState<boolean>(false)
  const [grade, setGrade] = useState<number | null>(null)

  const nextAnswer = async () => {
    await dispatch(cardsThunks.changeGrade({
      card_id: card?._id!,
      grade: grade!,
      packId: card?.cardsPack_id!
    })).unwrap().then(res => {
      setShowAnswer(false)
      setCard(getCard(res))
    })
  }
  useEffect(() => {
    if (cards) {
      setCard(getCard(cards))
      return
    }
    if (id) {
      dispatch(cardsThunks.fetchCards({ cardsPack_id: id })).unwrap().then(res => setCard(getCard(res.cards.cards)))
    }
    return () => {
      dispatch(cardsAction.resetCards())
    }
  }, [])

  if (!card) {
    return <></>
  }

  return (
    <div className={s.learnContainer}>
      <h2 className={s.title}>Learn: '{packName}'</h2>
      <div className={s.questionContainer}>
        <div className={s.question}>
          <span>Question:</span> {card.question}
        </div>
        <p>Количество попыток ответов на вопрос: {card.shots}</p>
      </div>
      {!showAnswer && <button className={s.button} onClick={() => setShowAnswer(true)}>Show Answer</button>}
      {showAnswer && <Answer setGrade={setGrade} grade={grade} answer={card.answer} nextAnswer={nextAnswer} />}
    </div>
  )
}

