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
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectValue, setSelectValue] = useState<SelectType>('Text')
  const [question, setQuestion] = useState<string>('')
  const [answer, setAnswer] = useState<string>('')

  const createNewCards = async () => {
    await dispatch(cardsThunks.createCard({ question, answer }))
    setIsModalOpen(false)
    setQuestion('')
    setAnswer('')
  }

  return (
    <>
      <BaseModal
        titleButtonAction={'Add New Card'}
        buttonOpen={<SuperButton width={'184'} title={'Add New Card'} />}
        title={'Add New Card'}
        open={isModalOpen}
        setOpen={setIsModalOpen}
        actionCallback={createNewCards}
        isButtonDisabled={false}
      >
        <div className={s.newCardContainer}>
          <SelectTextImg select={selectValue} setSelect={setSelectValue} />
          <div className={s.input}>
            <InputCustom label={'Question'} value={question} setValue={setQuestion} />
            <InputCustom label={'Answer'} value={answer} setValue={setAnswer} />
          </div>
        </div>
      </BaseModal>
    </>
  )
}

