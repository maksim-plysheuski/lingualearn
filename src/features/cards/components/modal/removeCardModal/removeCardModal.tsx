import React, { useState } from 'react'
import { BaseModal } from 'common/components/baseModal/BaseModal'
import s from './style.module.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useRemoveCardMutation } from 'features/cards/service/card.slice'

type Props = { cardId: string, title: string }

export const RemoveCardModal = (props: Props) => {
  const [removeCard,{isLoading}] = useRemoveCardMutation()
  const { cardId, title } = props
  const [open, setOpen] = useState(false)
  const [disable, setDisable] = useState(false)

  const editCards = async () => {
    await removeCard({ id: cardId })
    setOpen(false)
  }

  return (
    <>
      <BaseModal buttonOpen={<DeleteOutlineIcon fontSize={'small'} />} title={'Delete Pack'} open={open}
                 setOpen={setOpen} actionCallback={editCards} titleButtonAction={'Delete Pack'} disable={isLoading}
      >
        <div className={s.textContainer}>
          Do you really want to remove?
          <div className={s.text}>{`${title}`}</div>
        </div>
      </BaseModal>
    </>
  )
}

