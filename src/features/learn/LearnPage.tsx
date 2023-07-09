import React, { useEffect, useState } from 'react'
import { getCard } from 'features/learn/getRandomCard'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { selectCards, selectPackName } from 'features/cards/selectors'
import { cardsAction, cardsThunks } from 'features/cards/cards.slice'
import { useParams } from 'react-router-dom'
import s from './style.module.scss'
import { TCard } from 'features/cards/cardsApi'
import { Answer } from 'features/learn/answer/answer'
import { SuperButton } from 'common/components/superButton/SuperButton'


export const LearnPage = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()

  const cards = useAppSelector(selectCards)
  const packName = useAppSelector(selectPackName)
  const [card, setCard] = useState<TCard>()
  const [showAnswer, setShowAnswer] = useState<boolean>(false)
  const [grade, setGrade] = useState<number | null>(null)

  const nextAnswer = async () => {
    const payload = {
      card_id: card?._id!,
      grade: grade!,
      packId: card?.cardsPack_id!
    }
    await dispatch(cardsThunks.changeGrade(payload))
      .unwrap()
      .then(res => {
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
      <h2 className={s.title}>Learn: {packName}</h2>
      <div className={s.questionContainer}>
        <div className={s.question}>
          <span>Question:</span> {card.question}
        </div>
        <span className={s.attemptsCount}>Count of attempts to answer that question: <b>{card.shots}</b></span>
      </div>
      {!showAnswer && <SuperButton title={'Show Answer'} marginTop={'41px'} onClick={() => setShowAnswer(true)} />}
      {showAnswer && <Answer setGrade={setGrade} grade={grade} answer={card.answer} nextAnswer={nextAnswer} />}
    </div>
  )
}

