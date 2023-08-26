import React from 'react'
import s from './style.module.scss'
import { selectCardsTotalCount, selectPackId } from 'features/cards/selectors'
import { AddCardsModal } from 'features/cards/components/modal/addCardModal/addCardModal/AddCardsModal'
import { MenuPacks } from 'features/cards/components/cardsPage/menuCards/menuPacks'
import { useAppSelector } from 'common/hooks'
import {
  selectCardPackCover,
  selectPackCreated,
  selectPackName,
  selectPrivatePack
} from 'features/cards/selectors/selectors'
import { useNavigate } from 'react-router-dom'
import { SuperButton } from 'common/components'
import PanoramaOutlinedIcon from '@mui/icons-material/PanoramaOutlined'
import { selectIsMyPack } from 'features/pack/selectors'


export const TitleBlockCards = () => {
  const isMyPack = useAppSelector(selectIsMyPack)
  const packName = useAppSelector(selectPackName)
  const packId = useAppSelector(selectPackId)
  const cardsTotalCount = useAppSelector(selectCardsTotalCount)
  const packCover = useAppSelector(selectCardPackCover)
  const packCreatedDate = useAppSelector(selectPackCreated)
  const isPrivatePack = useAppSelector(selectPrivatePack)
  const navigate = useNavigate()

  const learnPack = () => navigate(`/learn/${packId}`)

  return (
    <div className={s.container}>
      <div className={s.titleContainer}>
        {isMyPack ? <div className={s.titleMenu}>
            <h2>My pack</h2>
            <MenuPacks />
          </div>
          : <h2>Friend’s Pack</h2>}
        {isMyPack ? <AddCardsModal /> : <SuperButton width={'184'} title={'Learn Pack'} onClick={learnPack} />}
      </div>
      <div className={s.infoContainer}>
        <h3>{packName}</h3>
        <div className={s.info}>
        {packCover
          ? <img src={packCover} alt='pack image' />
          : <PanoramaOutlinedIcon sx={{ fontSize: '95px', color: '#e66300', p: 0, m: 0 }} />}
          <span>{`Total cards: ${cardsTotalCount}`}</span>
          {isMyPack && <span>{isPrivatePack ? 'Private Pack' : 'Public pack'}</span>}
          <span>{`Created: ${packCreatedDate.slice(0, 10).split('-').reverse().join('.')}`}</span>
        </div>
      </div>
    </div>
  )
}

