import { SuperButton } from 'common/components'
import React from 'react'
import s from './style.module.scss'

type Props = {
  answer: string | undefined
  grade: number | null
  setGrade: (grade: number) => void
  showNextQuestion: () => void
}
const arrMenu = ['Did not know', 'Forgot', 'A lot of thoughts', 'Confused', 'Knew the answer']

export const Answer = (props: Props) => {
  const { setGrade, grade, answer, showNextQuestion } = props

  const radioSlice = arrMenu.map((res, index) => {
    return (
      <label key={index}>
        <input type='radio'
               checked={index + 1 === grade}
               name='rate'
               hidden
               value={index + 1}
               onChange={(e) => setGrade(+e.currentTarget.value)} />
        <span className={s.customRadio}></span>
        <span className={s.options}>{res}</span>
      </label>
    )
  })

  return (
    <div className={s.answerContainer}>
      <div className={s.answer}>
        <span>Answer:</span> {answer}
      </div>
      <div className={s.formGroup}>
        <span className={s.rate}>Rate yourself:</span>{radioSlice}
      </div>
      <SuperButton title='Next Question' marginTop={'29px'} onClick={showNextQuestion} disabled={grade === null} />
    </div>
  )
}

