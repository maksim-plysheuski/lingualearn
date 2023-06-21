import React, { useState } from 'react'
import { BaseModalCard } from 'features/cards/components/modal/baseModalCard/BaseModalCard'
import s from './style.module.scss'
import { useAppDispatch } from '../../../../../common/hooks'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { cardsThunks } from '../../../cards.slice'

type Props = {
  cardId: string
  title: string
}

export const RemoveCardModal = (props: Props) => {
  const { cardId, title } = props
  const dispatch = useAppDispatch()
  const [open, setOpen] = useState(false)
  const [disable, setDisable] = useState(false)


  const editCards = async () => {
    setDisable(true)
    await dispatch(cardsThunks.removeCard({ id: cardId }))
    setOpen(false)
    setDisable(false)
  }

  return (
    <>
      <BaseModalCard
        buttonOpen={<DeleteOutlineIcon fontSize={'small'} />}
        title={'Delete Pack'}
        open={open}
        setOpen={setOpen}
        actionCallback={editCards}
        titleButtonAction={'Delete Pack'}
        disable={disable}
      >
        <div className={s.textContainer}>
          Do you really want to remove?
          <div className={s.text}>{`${title}`}</div>
        </div>
      </BaseModalCard>
    </>
  )
}

