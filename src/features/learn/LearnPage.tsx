import React, { useEffect, useState } from 'react'
import s from './style.module.scss'
import { Answer } from './answer'
import { SuperButton } from 'common/components'
import { CardType } from 'features/cards/service/cards.types'
import { useChangeGradeCardMutation } from 'features/cards/service/cards.api'
import { getRandomCard } from 'features/learn/getRandomCard'
import { useFetchCards } from 'features/cards/hooks/useFetchCards'
import { Skeleton } from '@mui/material'
import { useParams } from 'react-router-dom'

export const LearnPage = () => {
  const { cardsCount } = useParams<{ cardsCount: string }>()
  const { data, packId, isLoading, refetch } = useFetchCards(+cardsCount!)
  const [card, setCard] = useState<CardType>()
  const [showAnswer, setShowAnswer] = useState<boolean>(false)
  const [grade, setGrade] = useState<number | null>(null)
  const [changeCardGrade] = useChangeGradeCardMutation()

  useEffect(() => {
    if (data) {
      setCard(getRandomCard(data.cards))
    }
  }, [data])


  const nextAnswer = () => {
    setShowAnswer(false)
    changeCardGrade({ card_id: card?._id!, grade: grade!, packId: packId! })
      .unwrap().then(() => refetch())
  }

  if (isLoading) return <Skeleton sx={{ bgcolor: 'grey.900', width: 420, height: 390 }}
                                  variant='text'
                                  animation='wave' />

  return (
    <div className={s.learnContainer}>
      <h2 className={s.title}>Learn: {data?.packName!}</h2>
      <div className={s.questionContainer}>
        <div className={s.question}>
          <span>Question:</span> {card?.question}
        </div>
        <span className={s.attemptsCount}>Count of attempts to answer that question: <b>{card?.shots}</b></span>
      </div>
      {!showAnswer && <SuperButton title={'Show Answer'} marginTop={'41px'} onClick={() => setShowAnswer(true)} />}
      {showAnswer && <Answer setGrade={setGrade} grade={grade} answer={card?.answer} nextAnswer={nextAnswer} />}
    </div>
  )
}

