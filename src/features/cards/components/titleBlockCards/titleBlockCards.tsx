import React from 'react'
import { useAppSelector } from 'common/hooks'
import { UniversalButton } from 'common/components/universalButton/UniversalButton'
import s from './style.module.scss'
import { selectPackUserId } from 'features/cards/selectors'
import { AddRemoveCardsModal } from 'features/cards/components/modal/addRemoveCardModal/AddRemoveCardsModal'

export const TitleBlockCards = () => {

  const packUserId = useAppSelector(selectPackUserId)
  const userId = useAppSelector(state => state.profile.profile?._id)
  const edit = packUserId === userId
  const title = edit ? 'My Pack' : 'Friends Pack'

  return (
    <div className={s.container}>
      <div className={s.titleContainer}>
        <h2>{title}</h2>
        {edit && <img src='' alt='icon' />}
      </div>
      {
        edit ? <AddRemoveCardsModal /> :
          <UniversalButton width={'184'} title={'learn pack'} />
      }
    </div>
  )
}

