import React from 'react'
import s from './style.module.scss'
import { Answer } from 'features/learn/components/answer'
import { SuperButton } from 'common/components'
import { useLearnCards } from 'features/learn/hooks/useLearnCards'
import { SkeletonLearnPage } from 'features/learn/components/skeletonLearnPage/SkeletonLearnPage'

export const LearnPage = () => {
  const { data, grade, isLoading, randomCard, showAnswer,
    changeGrade, showRightAnswer, generateNextCard } = useLearnCards()

  if (isLoading) return <SkeletonLearnPage />

  return (
    <div className={s.learnContainer}>
      <h2 className={s.title}>Learn: {data?.packName!}</h2>
      <div className={s.questionContainer}>
        <div className={s.question}>
          <span>Question:</span> {randomCard?.question}
        </div>
        <span className={s.attemptsCount}>
          Count of attempts to answer that question: <b>{randomCard?.shots}</b>
        </span>
      </div>
      {!showAnswer && <SuperButton title={'Show Answer'} marginTop={'41px'}
                                   onClick={() => showRightAnswer(true)} />}
      {showAnswer && <Answer setGrade={changeGrade} grade={grade}
                             answer={randomCard?.answer}
                             showNextQuestion={generateNextCard} />}
    </div>
  )
}

