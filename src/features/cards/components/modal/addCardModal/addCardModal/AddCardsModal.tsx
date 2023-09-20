import React, { useState } from 'react'
import { BaseModal } from 'common/components'
import { QuestionSelectType } from 'features/cards/components/modal/addCardModal/select/SelectTextImg'
import { toast } from 'react-toastify'
import { CardsBodyModal } from 'features/cards/components/modal/common/cardsBodyModal/CardsBodyModal'
import { SuperButton } from 'common/components'
import { useCreateCardMutation } from 'features/cards/service/cards.api'
import { useNavigate, useParams } from 'react-router-dom'


export const AddCardsModal = () => {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectValue, setSelectValue] = useState<QuestionSelectType>('Text')
  const [question, setQuestion] = useState<string>('')
  const [answer, setAnswer] = useState<string>('')
  const [questionImg, setQuestionImg] = useState<string>('')
  const [answerImg, setAnswerImg] = useState<string>('')
  const { packId } = useParams<{ packId: string }>()
  const [createCard, { isLoading }] = useCreateCardMutation()

  const createNewCards = () => {
    const isTextCard = selectValue === 'Text'
    const newCard = isTextCard ? { question, answer } : { questionImg, answerImg }
    createCard({ cardsPack_id: packId!, ...newCard }).unwrap()
      .then((res) => toast.info(
        `New card ${res.newCard.question !== 'no question'
          ? res.newCard.question
          : ''} has been created`
      ))
      .catch((err) => toast.error(err.data.error ? err.data.error : err.data.info))
      .finally(() => {
        navigate(`/cards/${packId}`)
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



