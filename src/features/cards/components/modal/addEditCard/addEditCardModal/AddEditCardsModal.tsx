import React, { useState } from 'react'
import { BaseModalCard } from 'features/cards/components/modal/baseModalCard/BaseModalCard'
import { UniversalButton } from 'common/components/universalButton/UniversalButton'
import { SelectTextImg, SelectType } from 'features/cards/components/modal/addEditCard/select/SelectTextImg'
import { InputCastom } from 'features/cards/components/modal/addEditCard/inputCastom/InputCastom'
import s from 'features/cards/components/modal/addEditCard/addEditCardModal/style.module.scss'

type Props = {
  callback: (question: string, answer: string) => void
}
export const AddEditCardsModal = (props: Props) => {
  const { callback } = props
  const [open, setOpen] = useState(false)
  const [select, setSelect] = useState<SelectType>('Text')
  const [question, setQuestion] = useState<string>('')
  const [answer, setAnswer] = useState<string>('')

  const createNewCards = async () => {
    await callback(question, answer)
    setOpen(false)
    setQuestion('')
    setAnswer('')
  }

  return (
    <>
      <BaseModalCard
        buttonOpen={<UniversalButton width={'184'} title={'Add New Card'} onClickCallback={() => setOpen(true)} />}
        title={'Add new card'}
        open={open}
        setOpen={setOpen}
        actionCallback={createNewCards}
      >
        <div className={s.newCardContainer}>
          <SelectTextImg select={select} setSelect={setSelect} />
          <InputCastom label={'Question'} value={question} setValue={setQuestion} />
          <InputCastom label={'Answer'} value={answer} setValue={setAnswer} />
        </div>
      </BaseModalCard>
    </>
  )
}

