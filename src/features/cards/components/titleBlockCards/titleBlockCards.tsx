import React from 'react'
import { useAppSelector } from 'common/hooks'
import { UniversalButton } from 'common/components/universalButton/UniversalButton'
import s from './style.module.scss'
import { selectPackUserId } from 'features/cards/selectors'
import { AddNewCardsModal } from 'features/cards/components/modal/addNewCardModal/AddNewCardsModal'

export const TitleBlockCards = () => {

  const packUserId = useAppSelector(selectPackUserId)
  const userId = useAppSelector(state => state.profile.profile?._id)
  const edit = packUserId === userId

  return (
    <div className={s.container}>
      <div className={s.titleContainer}>
        <h2>{edit ? 'My Pack' : 'Friends Pack'}</h2>
        {edit && <img src='' alt='icon' />}
      </div>
      {
        edit ? <AddNewCardsModal/> :
          <UniversalButton width={'184'} title={'learn pack'} />
      }

    </div>
  )
}

