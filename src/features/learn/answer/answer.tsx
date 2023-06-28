import React from 'react'
import s from './style.module.scss'

type Props = {
  answer: string
  grade: number | null
  setGrade: (grade: number) => void
  nextAnswer: () => void
}

export const Answer = (props: Props) => {
  const { setGrade, grade, answer, nextAnswer } = props
  const arrMenu = ['Did not know', 'Forgot', 'A lot of thought', 'Сonfused', 'Knew the answer']
  const radioSlice = arrMenu.map((res, index) => {
    return (
      <label key={index}>
        <input type='radio'
               checked={index + 1 === grade}
               name='rate'
               hidden
               value={index + 1}
               onChange={(e) => setGrade(+e.currentTarget.value)} />
        <span className={s.castomRadio}></span>
        {res}
      </label>
    )
  })

  return (
    <div className={s.answerContainer}>
      <div className={s.answer}>
        <span>Answer:</span> {answer}
      </div>
      <div className={s.formGroup}>
        <span className={s.rate}>Rate yourself:</span>
        {radioSlice}
      </div>
      <button onClick={nextAnswer} disabled={grade === null} className={s.button}>Next Question</button>
    </div>
  )
}

