import React, { useState } from 'react'
import { BaseModalC } from 'features/cards/components/modal/BaseModalC'
import { UniversalButton } from 'common/components/universalButton/UniversalButton'
import { SelectTextImg, SelectType } from 'features/cards/components/modal/addNewCardModal/select/SelectTextImg'
import { InputCastom } from 'features/cards/components/modal/addNewCardModal/InputCastom'
import s from './style.module.scss'
import { useAppDispatch } from 'common/hooks'
import { cardsThunks } from 'features/cards/cards.slice'

export const AddNewCardsModal = () => {
  const dispatch = useAppDispatch()
  const [open, setOpen] = useState(false)
  const [select, setSelect] = useState<SelectType>('Text')
  const [question, setQuestion] = useState<string>('')
  const [answer, setAnswer] = useState<string>('')

  const createNewCards = async () => {
    await dispatch(cardsThunks.createCard({ question, answer }))
    setOpen(false)
    setQuestion('')
    setAnswer('')
  }


  return (
    <>
      <BaseModalC
        buttonOpen={<UniversalButton width={'184'} title={'add card'} onClickCallback={() => setOpen(true)} />}
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
      </BaseModalC>
    </>
  )
}

