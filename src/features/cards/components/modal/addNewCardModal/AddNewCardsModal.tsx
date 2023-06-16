import React, { useState } from 'react'
import { BaseModal } from 'features/cards/components/modal/BaseModal'
import { UniversalButton } from 'common/components/universalButton/UniversalButton'
import { SelectTextImg, SelectType } from 'features/cards/components/modal/addNewCardModal/SelectTextImg'
import { InputCastom } from 'features/cards/components/modal/addNewCardModal/InputCastom'
import s from './style.module.scss'

export const AddNewCardsModal = () => {
  const [select, setSelect] = useState<SelectType>('Text')
  const [question, setQuestion] = useState<string>('')
  const [answer, setAnswer] = useState<string>('')

  return (
    <>
      <BaseModal buttonChildren={<UniversalButton width={'184'} title={'add card'} />}
                 title={'Add new card'}
      >
        <div className={s.newCardContainer}>
          <SelectTextImg select={select} setSelect={setSelect} />
          <InputCastom label={'Question'} value={question} setValue={setQuestion} />
          <InputCastom label={'Answer'} value={answer} setValue={setAnswer} />
          <UniversalButton marginTop={'40px'} width={'184'} title={'add card'} />
        </div>
      </BaseModal>
    </>
  )
}

