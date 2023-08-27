import React, { useState } from 'react'
import { BaseModal } from 'common/components'
import { QuestionSelectType } from 'features/cards/components/modal/addCardModal/select/SelectTextImg'
import { toast } from 'react-toastify'
import { CardsBodyModal } from 'features/cards/components/modal/common/cardsBodyModal/CardsBodyModal'
import { SuperButton } from 'common/components'
import { useCreateCardMutation } from 'features/cards/service/cards.api'
import { useGetCards } from 'features/cards/hooks/useGetCards'


export const AddCardsModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectValue, setSelectValue] = useState<QuestionSelectType>('Text')
  const [question, setQuestion] = useState<string>('')
  const [answer, setAnswer] = useState<string>('')
  const [questionImg, setQuestionImg] = useState<string>('')
  const [answerImg, setAnswerImg] = useState<string>('')
  const { packId } = useGetCards()
  const [createCard, { isLoading }] = useCreateCardMutation()

  const createNewCards = () => {
    const isTextCard = selectValue === 'Text'
    const newCard = isTextCard ? { question, answer } : { questionImg, answerImg }

    createCard({ cardsPack_id: packId!, ...newCard })
      .unwrap()
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



