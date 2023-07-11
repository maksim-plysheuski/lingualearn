import React, { useState } from 'react'
import { BaseModal } from 'common/components/baseModal/BaseModal'
import { QuestionSelectType } from 'features/cards/components/modal/addCardModal/select/SelectTextImg'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { cardsThunks } from 'features/cards/cards.slice'
import { toast } from 'react-toastify'
import { loadingSelect } from 'app'
import { CardsBodyModal } from 'features/cards/components/modal/common/cardsBodyModal/CardsBodyModal'
import { SuperButton } from 'common/components'


export const AddCardsModal = () => {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(loadingSelect)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectValue, setSelectValue] = useState<QuestionSelectType>('Text')
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
        title={'Add New Card'}
        open={isModalOpen}
        isButtonDisabled={isLoading}
        setOpen={setIsModalOpen}
        actionCallback={createNewCards}
        buttonOpen={<SuperButton width={'184'} title={'Add New Card'} />}
      >
        <CardsBodyModal answer={answer}
                        question={question}
                        answerImg={answerImg}
                        questionImg={questionImg}
                        selectValue={selectValue}
                        setAnswer={setAnswer}
                        setQuestion={setQuestion}
                        setAnswerImg={setAnswerImg}
                        setQuestionImg={setQuestionImg}
                        setSelectValue={setSelectValue}
        />
      </BaseModal>
    </>
  )
}



