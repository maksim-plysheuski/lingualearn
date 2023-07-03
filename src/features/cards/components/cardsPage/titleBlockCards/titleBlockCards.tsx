import React from 'react'
import { SuperButton } from 'common/components/superButton/SuperButton'
import s from 'features/cards/components/cardsPage/titleBlockCards/style.module.scss'
import { selectWhoseCards } from 'features/cards/selectors'
import { AddCardsModal } from 'features/cards/components/modal/addCard/addCardModal/AddCardsModal'
import { MenuPacks } from 'features/cards/components/cardsPage/menuCards/menuPacks'
import { useSelector } from 'react-redux'
import { useAppSelector } from 'common/hooks'
import { selectPackName } from 'features/cards/selectors/cards.selector'

export const TitleBlockCards = () => {
  const whoseCards = useSelector(selectWhoseCards)
  const packName = useAppSelector(selectPackName)

  return (
    <div className={s.container}>
      <div className={s.titleContainer}>
        <h2 className={s.title}>{whoseCards ? 'My Pack' : 'Friend’s Pack'}</h2>
        {whoseCards && <MenuPacks />}
      </div>
      <span>{packName}</span>
      {whoseCards ? <AddCardsModal /> : <SuperButton width={'184'} title={'learn pack'} />}
    </div>
  )
}

