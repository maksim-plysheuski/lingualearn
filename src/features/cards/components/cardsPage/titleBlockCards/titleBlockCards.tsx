import React from 'react'
import { UniversalButton } from 'common/components/universalButton/UniversalButton'
import s from 'features/cards/components/cardsPage/titleBlockCards/style.module.scss'
import { selectWhoseCards } from 'features/cards/selectors'
import { AddCardsModal } from 'features/cards/components/modal/addEditCard/addCardModal/AddCardsModal'
import { MenuCards } from '../menuCards/menuCards'
import { useSelector } from 'react-redux'

export const TitleBlockCards = () => {
  const whoseCards = useSelector(selectWhoseCards)
  const title = whoseCards ? 'My Pack' : 'Friend’s Pack'

  return (
    <div className={s.container}>
      <div className={s.titleContainer}>
        <h2 className={s.title}>{title}</h2>
        {whoseCards && <MenuCards />}
      </div>
      {whoseCards ? <AddCardsModal /> : <UniversalButton width={'184'} title={'learn pack'} />}
    </div>
  )
}

