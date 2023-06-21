import React, { useState } from 'react'
import { BaseModalCard } from 'features/cards/components/modal/baseModalCard/BaseModalCard'
import { SelectTextImg, SelectType } from 'features/cards/components/modal/addEditCard/select/SelectTextImg'
import { InputCastom } from 'features/cards/components/modal/addEditCard/inputCastom/InputCastom'
import s from 'features/cards/components/modal/addEditCard/addCardModal/style.module.scss'
import { cardsThunks } from '../../../../cards.slice'
import { useAppDispatch } from '../../../../../../common/hooks'
import { UniversalButton } from '../../../../../../common/components/universalButton/UniversalButton'



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
      <BaseModalCard
        titleButtonAction={'Add New Card'}
        buttonOpen={<UniversalButton width={'184'} title={'Add New Card'}/>}
        title={'Add New Card'}
        open={open}
        setOpen={setOpen}
        actionCallback={createNewCards}
        disable={false}
      >
        <div className={s.newCardContainer}>
          <SelectTextImg select={select} setSelect={setSelect} />
          <div className={s.input}>
            <InputCastom label={'Question'} value={question} setValue={setQuestion} />
            <InputCastom label={'Answer'} value={answer} setValue={setAnswer} />
          </div>
        </div>
      </BaseModalCard>
    </>
  )
}

