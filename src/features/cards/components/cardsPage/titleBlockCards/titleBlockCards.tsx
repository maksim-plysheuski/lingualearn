import React from 'react'
import { SuperButton } from 'common/components/superButton/SuperButton'
import s from 'features/cards/components/cardsPage/titleBlockCards/style.module.scss'
import { AddCardsModal } from 'features/cards/components/modal/addCard/addCardModal/AddCardsModal'
import { MenuPacks } from 'features/cards/components/cardsPage/titleBlockCards/menuCards/menuPacks'
import { useAppSelector } from 'common/hooks'
import { useFetchCards } from 'features/cards/service'
import { userIdSelect } from 'features/profile'


export const TitleBlockCards = () => {
  const userId = useAppSelector(userIdSelect)

  const { data } = useFetchCards()
  const show = userId === data?.packUserId

  return (
    <div className={s.container}>
      <div className={s.titleContainer}>
        <h2 className={s.title}>{show ? 'My Pack' : 'Friend’s Pack'}</h2>
        {show && <MenuPacks />}
      </div>
      <span>{data?.packName}</span>
      {show ? <AddCardsModal /> : <SuperButton width={'184'} title={'learn pack'} />}
    </div>
  )
}

