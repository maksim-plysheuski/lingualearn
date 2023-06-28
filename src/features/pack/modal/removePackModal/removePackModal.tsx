import React, { useState } from 'react'
import { BaseModal } from 'common/components/baseModal/BaseModal'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { selectCardsPack_id, selectPackName } from 'features/cards/selectors/cards.selector'
import { packsThunks } from 'features/pack/packs.slice'
import { useNavigate } from 'react-router-dom'
import s from './style.module.scss'


export const RemovePackModal = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = useState<boolean>(false)
  const [disable, setDisable] = useState<boolean>(false)
  const packName = useAppSelector(selectPackName)
  const cardsPack_id = useAppSelector(selectCardsPack_id)

  const removePackHandler = async () => {
    setDisable(true)
    await dispatch(packsThunks.deletePack({ id: cardsPack_id }))
    navigate('/packs')
    setOpen(false)
    setDisable(false)

  }
  return (
    <BaseModal title={'Delete Pack'}
               open={open}
               setOpen={setOpen}
               buttonOpen={<><DeleteOutlineIcon /> Delete</>}
               actionCallback={removePackHandler}
               titleButtonAction={'Delete Pack'}
               disable={disable}
    >
      <div className={s.childrenContainer}>
        Do you really want to remove {packName}? All cards will be deleted.
      </div>
    </BaseModal>

  )
}

