import React from 'react'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { UniversalButton } from 'common/components/universalButton/UniversalButton'
import s from 'features/cards/components/cardsPage/titleBlockCards/style.module.scss'
import { selectPackUserId } from 'features/cards/selectors'
import { AddEditCardsModal } from 'features/cards/components/modal/addEditCard/addEditCardModal/AddEditCardsModal'
import { cardsThunks } from 'features/cards/cards.slice'

export const TitleBlockCards = () => {
  const dispatch = useAppDispatch()
  const packUserId = useAppSelector(selectPackUserId)
  const userId = useAppSelector(state => state.profile.profile?._id)
  const edit = packUserId === userId
  const title = edit ? 'My Pack' : 'Friends Pack'
  const createCartHandler = (question: string, answer: string) => {
    dispatch(cardsThunks.createCard({ question, answer }))
  }

  return (
    <div className={s.container}>
      <div className={s.titleContainer}>
        <h2>{title}</h2>
        {edit && <img src='' alt='icon' />}
      </div>
      {
        edit ? <AddEditCardsModal callback={createCartHandler}/> :
          <UniversalButton width={'184'} title={'learn pack'} />
      }
    </div>
  )
}

