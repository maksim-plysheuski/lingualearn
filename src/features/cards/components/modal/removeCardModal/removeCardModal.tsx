import React, { useState } from 'react'
import { BaseModal } from 'common/components/baseModal/BaseModal'
import s from './style.module.scss'
import { useAppDispatch } from 'common/hooks'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { cardsThunks } from 'features/cards/cards.slice'
import { toast } from 'react-toastify'

type Props = {
  cardId: string
  title: string
}

export const RemoveCardModal = (props: Props) => {
  const { cardId, title } = props
  const dispatch = useAppDispatch()
  const [open, setOpen] = useState(false)
  const [disable, setDisable] = useState(false)

  const deleteCard = async () => {
    setDisable(true)
    await dispatch(cardsThunks.deleteCard({ id: cardId })).unwrap()
      .then(() => toast.info(`Card has been removed`))
      .catch((err) => toast.error(err.e.response ? err.e.response.data.error : err.e.message))
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
        actionCallback={deleteCard}
        titleButtonAction={'Delete Card'}
        isButtonDisabled={disable}
      >
        <div className={s.textContainer}>
          <span>
            {`Do you really want to remove `}
            {title !== 'no question' ? <b>${title}?</b> : 'this card?'}
          </span>
          <p>Card will be deleted.</p>
        </div>
      </BaseModal>
    </>
  )
}

