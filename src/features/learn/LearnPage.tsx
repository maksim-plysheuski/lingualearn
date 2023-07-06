import React, { useState } from 'react'
import s from './style.module.scss'
import { Answer } from 'features/learn/answer/answer'
import { CardsT, useFetchCards } from 'features/cards/service'


export const LearnPage = () => {
  const { data } = useFetchCards()


  const [card, setCard] = useState<CardsT>()
  const [showAnswer, setShowAnswer] = useState<boolean>(false)
  const [grade, setGrade] = useState<number | null>(null)

  const nextAnswer = async () => {
    const payload = {
      card_id: card?._id!,
      grade: grade!,
      packId: card?.cardsPack_id!
    }
    // await dispatch(cardsThunks.changeGrade(payload))
    //   .unwrap()
    //   .then(res => {
    //   setShowAnswer(false)
    //   setCard(getCard(res))
    // })
  }

  // useEffect(() => {
  //   if (cards) {
  //     setCard(getCard(cards))
  //     return
  //   }
  //   if (id) {
  //     dispatch(cardsThunks.fetchCards({ cardsPack_id: id })).unwrap().then(res => setCard(getCard(res.cards.cards)))
  //   }
  //   return () => {
  //     dispatch(cardsAction.resetCards())
  //   }
  // }, [])

  if (!card) {
    return <></>
  }

  return (
    <div className={s.learnContainer}>
      <h2 className={s.title}>Learn: '{data?.packName}'</h2>
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

