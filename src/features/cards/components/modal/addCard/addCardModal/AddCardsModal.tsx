import React, { useState } from 'react'
import { BaseModal } from 'common/components/baseModal/BaseModal'
import { SelectTextImg, SelectType } from 'features/cards/components/modal/addCard/select/SelectTextImg'
import { InputCustom } from 'common/components/baseModal/inputCastom/InputCustom'
import s from './style.module.scss'
import { SuperButton } from 'common/components/superButton/SuperButton'
import { useAppDispatch } from 'common/hooks'
import { cardsThunks } from 'features/cards/cards.slice'
import { CoverModalBlock } from 'features/cards/components/modal/cardsModalContent/CoverModalBlock'



export const AddCardsModal = () => {
  const dispatch = useAppDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectValue, setSelectValue] = useState<SelectType>('Text')
  const [question, setQuestion] = useState<string>('')
  const [answer, setAnswer] = useState<string>('')
  const [questionCover, setQuestionCover] = useState<string>('')
  const [answerCover, setAnswerCover] = useState<string>('')

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
          {selectValue === 'Text'
            ? <div className={s.input}>
              <InputCustom label={'Question'} value={question} setValue={setQuestion} />
              <InputCustom label={'Answer'} value={answer} setValue={setAnswer} />
            </div>
            : <>
                <span className={s.titles}>Question:</span>
                <CoverModalBlock coverImage={questionCover} setCoverImage={setQuestionCover} />
                <span className={s.titles}>Answer:</span>
                <CoverModalBlock coverImage={answerCover} setCoverImage={setAnswerCover} />
              </>
          }
        </div>
      </BaseModal>
    </>
  )
}

