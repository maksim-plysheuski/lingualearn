import React, { useState } from 'react'
import { BaseModal } from 'common/components/baseModal/BaseModal'
import { QuestionSelectType } from 'features/cards/components/modal/addCardModal/select/SelectTextImg'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import { cardsThunks } from '../../../cards.slice'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { CardsBodyModal } from 'features/cards/components/modal/common/cardsBodyModal/CardsBodyModal'
import { loadingSelect } from 'app'
import { toast } from 'react-toastify'

type Props = {
  cardId: string
  questionValue: string
  answerValue: string
  questionImgValue?: string
  answerImgValue?: string
}

export const EditCardsModal = (props: Props) => {
  const { questionValue, answerValue, questionImgValue, answerImgValue, cardId } = props

  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(loadingSelect)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectValue, setSelectValue] = useState<QuestionSelectType>(answerImgValue ? 'Picture' : 'Text')
  const [question, setQuestion] = useState<string>(questionValue)
  const [answer, setAnswer] = useState<string>(answerValue)
  const [questionImg, setQuestionImg] = useState<string>(questionImgValue || '')
  const [answerImg, setAnswerImg] = useState<string>(answerImgValue || '')

  //need to refactor
  const editCards = async () => {
    const newCard = questionImg ? { _id: cardId, question, answer } : { _id: cardId, questionImg, answerImg }
    await dispatch(cardsThunks.updateCard(newCard)).unwrap()
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
        buttonOpen={<DriveFileRenameOutlineIcon fontSize={'small'} />}


      >
        {/*<div className={s.newCardContainer}>
          <SelectTextImg select={select} setSelect={setSelect} />
          <div className={s.input}>
            <InputCustom label={'Question'} value={question} setValue={setQuestion} />
            <InputCustom label={'Answer'} value={answer} setValue={setAnswer} />
          </div>
        </div>*/}

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
