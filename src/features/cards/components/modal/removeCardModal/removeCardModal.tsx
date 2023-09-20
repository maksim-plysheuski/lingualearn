import React, { memo, useState } from 'react'
import { BaseModal } from 'common/components'
import s from './style.module.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { toast } from 'react-toastify'
import { useDeleteCardMutation } from 'features/cards/service/cards.api'

type Props = {
  cardId: string
  title: string
}

export const RemoveCardModal = memo((props: Props) => {
  const { cardId, title } = props
  const [open, setOpen] = useState(false)
  const [disable, setDisable] = useState(false)
  const [deleteCard] = useDeleteCardMutation()

  const deleteCardHandler = async () => {
    setDisable(true)
    deleteCard(cardId).unwrap()
      .then(() => toast.info(`Card has been removed`))
      .catch((err) => toast.error(err.data.error ? err.data.error : err.data.info))
    setOpen(false)
    setDisable(false)
  }

  return (
    <>
      <BaseModal
        buttonOpen={<DeleteOutlineIcon />}
        title={'Delete Card'}
        open={open}
        setOpen={setOpen}
        actionCallback={deleteCardHandler}
        titleButtonAction={'Delete Card'}
        isButtonDisabled={disable}>
        <div className={s.textContainer}>
          <span>{`Do you really want to remove `}{title !== 'no question' ? <b>{title}?</b> : 'this card?'}</span>
          <p>Card will be deleted.</p>
        </div>
      </BaseModal>
    </>
  )
})

