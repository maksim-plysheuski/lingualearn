import React, { useState } from 'react'
import { BaseModal } from 'common/components/modals/baseModal/BaseModal'
import { SelectTextImg, SelectType } from 'features/cards/components/modal/addCard/select/SelectTextImg'
import s from 'features/cards/components/modal/addCard/addCardModal/style.module.scss'
import { SuperButton } from 'common/components/superButton/SuperButton'
import { useAddCardMutation } from 'features/cards/service/card.slice'
import { useAppSelector } from 'common/hooks'
import { InputCustom } from 'common/components/modals/baseModal/inputCastom/InputCastom'


export const AddCardsModal = () => {
  const [addCard, { isLoading }] = useAddCardMutation()
  const cardsPack_id = useAppSelector(state => state.paramsCard.cardsPack_id!)

  const [open, setOpen] = useState(false)
  const [select, setSelect] = useState<SelectType>('Text')
  const [question, setQuestion] = useState<string>('')
  const [answer, setAnswer] = useState<string>('')

  const createNewCards = async () => {
    await addCard({ cardsPack_id, answer, question })
    setOpen(false)
    setQuestion('')
    setAnswer('')
  }

  return (
    <>
      <BaseModal
        titleButtonAction={'Add New Card'} buttonOpen={<SuperButton width={'184'} title={'Add New Card'} />}
        title={'Add New Card'} open={open} setOpen={setOpen} actionCallback={createNewCards} isButtonDisabled={isLoading}
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

