import { QuestionSelectType, SelectTextImg } from 'features/cards/components/modal/addCardModal/select/SelectTextImg'
import s from './style.module.scss'
import { InputCustom } from 'common/components/Inputs/inputCastom/InputCustom'
import { ImageBlockModal } from 'common/components'
import React from 'react'

type Type = {
  selectValue: QuestionSelectType
  answer: string
  question: string
  questionImg: string
  answerImg: string
  setSelectValue: (select: QuestionSelectType) => void
  setQuestion: (newValue: string) => void
  setAnswer: (newValue: string) => void
  setQuestionImg: (newImg: string) => void
  setAnswerImg: (newImg: string) => void
}
export const CardsBodyModal = (props: Type) => {
  const {
    selectValue, answer, question, questionImg, answerImg, setAnswer,
    setQuestion, setAnswerImg, setQuestionImg, setSelectValue
  } = props


  return (
    <div className={s.newCardContainer}>
      <SelectTextImg select={selectValue} setSelect={setSelectValue} />
      {selectValue === 'Text'
        ? <div className={s.input}>
          <InputCustom label={'Question'} value={question} setValue={setQuestion} />
          <InputCustom label={'Answer'} value={answer} setValue={setAnswer} />
        </div>
        : <>
          <ImageBlockModal coverTitle={'Question:'} coverImage={questionImg} setCoverImage={setQuestionImg} />
          <ImageBlockModal coverTitle={'Answer:'} coverImage={answerImg} setCoverImage={setAnswerImg} />
        </>
      }
    </div>
  )
}