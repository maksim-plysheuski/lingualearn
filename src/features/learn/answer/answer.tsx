import React from 'react'
import s from './style.module.scss'
import { SuperButton } from 'common/components/superButton/SuperButton'

type Props = {
  answer: string
  grade: number | null
  setGrade: (grade: number) => void
  nextAnswer: () => void
}
const arrMenu = ['Did not know', 'Forgot', 'A lot of thoughts', 'Confused', 'Knew the answer']

export const Answer = (props: Props) => {
  const { setGrade, grade, answer, nextAnswer } = props

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
      <SuperButton title='Next Question' marginTop={'29px'} onClick={nextAnswer} disabled={grade === null} />
    </div>
  )
}

