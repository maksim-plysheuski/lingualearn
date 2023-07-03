import React, { useState } from 'react'
import { BaseModal } from 'common/components/baseModal/BaseModal'
import { SelectTextImg, SelectType } from 'features/cards/components/modal/addCard/select/SelectTextImg'
import { InputCustom } from 'common/components/baseModal/inputCastom/InputCustom'
import s from 'features/cards/components/modal/addCard/addCardModal/style.module.scss'
import { cardsThunks } from '../../../../cards.slice'
import { SuperButton } from 'common/components/superButton/SuperButton'
import { useAppDispatch } from 'common/hooks'



export const AddCardsModal = () => {
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
      <BaseModal
        titleButtonAction={'Add New Card'}
        buttonOpen={<SuperButton width={'184'} title={'Add New Card'} />}
        title={'Add New Card'}
        open={open}
        setOpen={setOpen}
        actionCallback={createNewCards}
        disable={false}
      >
        <div className={s.newCardContainer}>
          <SelectTextImg select={select} setSelect={setSelect} />
          <div className={s.input}>
            <InputCustom label={'Question'} value={question} setValue={setQuestion} />
            <InputCustom label={'Answer'} value={answer} setValue={setAnswer} />
          </div>
        </div>
      </BaseModal>
    </>
  )
}

