import React from 'react'
import s from './style.module.scss'
import { AddCardsModal } from 'features/cards/components/modal/addCardModal/addCardModal/AddCardsModal'
import { MenuPacks } from 'features/cards/components/cardsPage/menuCards/menuPacks'
import { useAppSelector } from 'common/hooks'
import { useNavigate } from 'react-router-dom'
import { SuperButton } from 'common/components'
import PanoramaOutlinedIcon from '@mui/icons-material/PanoramaOutlined'
import { selectIsMyPack } from 'features/pack/selectors'
import { useGetCards } from 'features/cards/hooks/useGetCards'


export const TitleBlockCards = () => {
  const isMyPack = useAppSelector(selectIsMyPack)
  const {data, packId} = useGetCards()
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
        <h3>{data?.packName}</h3>
        <div className={s.info}>
        {data?.packDeckCover
          ? <img src={data?.packDeckCover} alt='pack image' />
          : <PanoramaOutlinedIcon sx={{ fontSize: '95px', color: '#e66300', p: 0, m: 0 }} />}
          <span>{`Total cards: ${data?.cardsTotalCount}`}</span>
          {isMyPack && <span>{data?.packPrivate ? 'Private Pack' : 'Public pack'}</span>}
          <span>{`Created: ${data?.packCreated.slice(0, 10).split('-').reverse().join('.')}`}</span>
        </div>
      </div>
    </div>
  )
}

