import React, { useState } from 'react'
import { BaseModal } from 'common/components/baseModal/BaseModal'
import { SelectTextImg, SelectType } from 'features/cards/components/modal/addCardModal/select/SelectTextImg'
import { InputCustom } from 'common/components/baseModal/inputCastom/InputCustom'
import s from 'features/cards/components/modal/addCardModal/addCardModal/style.module.scss'
import { SuperButton } from 'common/components/superButton/SuperButton'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { cardsThunks } from 'features/cards/cards.slice'
import { ImageBlockModal } from 'common/components/imageBlockModal/ImageBlockModal'
import { toast } from 'react-toastify'
import { loadingSelect } from 'app'


export const AddCardsModal = () => {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(loadingSelect)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectValue, setSelectValue] = useState<SelectType>('Text')
  const [question, setQuestion] = useState<string>('')
  const [answer, setAnswer] = useState<string>('')
  const [questionImg, setQuestionImg] = useState<string>('')
  const [answerImg, setAnswerImg] = useState<string>('')

  const createNewCards = async () => {
    const isTextCard = selectValue === 'Text'
    const newCard = isTextCard ? { question, answer } : { questionImg, answerImg }
    await dispatch(cardsThunks.createCard(newCard)).unwrap()
      .then((res) => toast.info(
        `New card ${res.newCard.question !== 'no question'
          ? res.newCard.question
          : ''} has been created`
      ))
      .catch((err) => toast.error(err.e.response ? err.e.response.data.error : err.e.message))
      .finally(() => {
        setIsModalOpen(false)
        if (isTextCard) {
          setQuestion('')
          setAnswer('')
        } else {
          setQuestionImg('')
          setAnswerImg('')
        }
      })
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
        isButtonDisabled={isLoading}
      >
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
      </BaseModal>
    </>
  )
}

