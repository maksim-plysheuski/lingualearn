import React, { useState } from 'react'
import { BaseModal } from 'common/components/modals/baseModal/BaseModal'
import s from './style.module.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useRemoveCardMutation } from 'features/cards/service/card.slice'

type Props = { cardId: string, title: string }

export const RemoveCardModal = (props: Props) => {
  const [removeCard, { isLoading }] = useRemoveCardMutation()
  const { cardId, title } = props
  const [open, setOpen] = useState(false)

  const editCards = async () => {
    await removeCard({ id: cardId })
    setOpen(false)
  }

  return (
    <>
      <BaseModal buttonOpen={<DeleteOutlineIcon />}
                 title={'Delete Pack'} open={open} setOpen={setOpen} actionCallback={editCards}
                 titleButtonAction={'Delete Card'} isButtonDisabled={isLoading}
      >
        <div className={s.textContainer}>
          <span>
            {`Do you really want to remove `}
            {title !== 'no question' ? <b>{title}?</b> : 'this card?'}
          </span>
          <p>Card will be deleted.</p>
        </div>
      </BaseModal>
    </>
  )
}

