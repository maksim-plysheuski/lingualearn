import React, { useState } from 'react'
import { BaseModal } from 'common/components'
import { QuestionSelectType } from 'features/cards/components/modal/addCardModal/select/SelectTextImg'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import { CardsBodyModal } from 'features/cards/components/modal/common/cardsBodyModal/CardsBodyModal'
import { toast } from 'react-toastify'
import { useUpdateCardMutation } from 'features/cards/service/cards.api'

type Props = {
  cardId: string
  questionValue: string
  answerValue: string
  questionImgValue?: string
  answerImgValue?: string
}

export const EditCardsModal = (props: Props) => {
  const { questionValue, answerValue, questionImgValue, answerImgValue, cardId } = props

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectValue, setSelectValue] = useState<QuestionSelectType>(answerImgValue ? 'Picture' : 'Text')
  const [question, setQuestion] = useState<string>(questionValue)
  const [answer, setAnswer] = useState<string>(answerValue)
  const [questionImg, setQuestionImg] = useState<string>(questionImgValue || '')
  const [answerImg, setAnswerImg] = useState<string>(answerImgValue || '')
  const [updateCard, { isLoading }] = useUpdateCardMutation()

  const editCards = () => {
    const newCard = { _id: cardId, question, answer, questionImg, answerImg  }
    updateCard(newCard).unwrap()
      .then(() => toast.info(`Card has been updated`))
      .catch((err) => toast.error(err.e.response ? err.e.response.data.error : err.e.message))
      .finally(() => {
        setIsModalOpen(false)
        setQuestionImg('')
        setAnswerImg('')
        setQuestion('')
        setAnswer('')
      })
  }

  return (
    <>
      <BaseModal
        title={'Edit Pack'}
        titleButtonAction={'Save Changes'}
        open={isModalOpen}
        isButtonDisabled={isLoading}
        setOpen={setIsModalOpen}
        actionCallback={editCards}
        buttonOpen={<DriveFileRenameOutlineIcon />}
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
