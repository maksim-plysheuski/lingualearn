import React from 'react'
import { SuperButton } from 'common/components/superButton/SuperButton'
import s from './style.module.scss'
import { selectIsMyCard, selectPackId } from 'features/cards/selectors'
import { AddCardsModal } from 'features/cards/components/modal/addCardModal/addCardModal/AddCardsModal'
import { MenuPacks } from 'features/cards/components/cardsPage/menuCards/menuPacks'
import { useSelector } from 'react-redux'
import { useAppSelector } from 'common/hooks'
import { selectPackName } from 'features/cards/selectors/selectors'
import { useNavigate } from 'react-router-dom'

export const TitleBlockCards = () => {
  const isMyPack = useSelector(selectIsMyCard)
  const packName = useAppSelector(selectPackName)
  const packId = useAppSelector(selectPackId)
  const navigate = useNavigate()

  const learnPack = () => navigate(`/learn/${packId}`)

  return (
    <div className={s.container}>
      <div className={s.titleContainer}>
        <h2 className={s.title}>{isMyPack ? 'My Pack' : 'Friend’s Pack'}</h2>
        {isMyPack && <MenuPacks />}
      </div>
      <span>{packName}</span>
      {isMyPack ? <AddCardsModal /> : <SuperButton width={'184'} title={'Learn Pack'} onClick={learnPack} />}
    </div>
  )
}

