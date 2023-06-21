import React, { ReactNode, useState } from 'react'
import { BaseModalCard } from 'features/cards/components/modal/baseModalCard/BaseModalCard'
import { SelectTextImg, SelectType } from 'features/cards/components/modal/addEditCard/select/SelectTextImg'
import { InputCastom } from 'features/cards/components/modal/addEditCard/inputCastom/InputCastom'
import s from './style.module.scss'

type Props = {
  callback: (question: string, answer: string) => void
  buttonOpen?: ReactNode
  questionValue: string
  answerValue: string
}

export const EditCardsModal = (props: Props) => {
  const { callback, buttonOpen, questionValue, answerValue } = props
  const [open, setOpen] = useState(false)
  const [select, setSelect] = useState<SelectType>('Text')
  const [question, setQuestion] = useState<string>(questionValue)
  const [answer, setAnswer] = useState<string>(answerValue)

  const createNewCards = async () => {
    await callback(question, answer)
    setOpen(false)
    setQuestion('')
    setAnswer('')
  }

  return (
    <>
      <BaseModalCard
        buttonOpen={buttonOpen}
        title={'Edit Pack'}
        open={open}
        setOpen={setOpen}
        actionCallback={createNewCards}
      >
        <div className={s.newCardContainer}>
          <SelectTextImg select={select} setSelect={setSelect} />
          <div className={s.input}>
            <InputCastom label={'Question'} value={question} setValue={setQuestion} />
            <InputCastom label={'Answer'} value={answer} setValue={setAnswer} />
          </div>
        </div>
      </BaseModalCard>
    </>
  )
}
