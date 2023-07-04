import React, { useState } from 'react'
import { BaseModal } from 'common/components/baseModal/BaseModal'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { selectPackId, selectPackName } from 'features/cards/selectors/cards.selector'
import { packsThunks } from 'features/pack/packs.slice'
import { useNavigate } from 'react-router-dom'
import s from './style.module.scss'
import { toast } from 'react-toastify'

type Props = {
  packId?: string
  packName?: string
}


export const RemovePackModal = (props: Props) => {
  const packName = useAppSelector(selectPackName)
  const packId = useAppSelector(selectPackId)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = useState<boolean>(false)
  const [disable, setDisable] = useState<boolean>(false)


  const removePackHandler = async () => {
    let payload = { id: props.packId ? props.packId : packId }
    setDisable(true)

    await dispatch(packsThunks.deletePack(payload)).unwrap()
      .then((res) => toast.info(`Pack ${res.pack.deletedCardsPack.name} has been removed`))
      .catch((err) => toast.error(err.e.response ? err.e.response.data.error : err.e.message))
      .finally(() => {
        navigate('/packs')
        setOpen(false)
        setDisable(false)
      })
  }

  return (
    <BaseModal title={'Delete Pack'}
               open={open}
               setOpen={setOpen}
               buttonOpen={<DeleteOutlineIcon />}
               actionCallback={removePackHandler}
               titleButtonAction={'Delete Pack'}
               isButtonDisabled={disable}
    >
      <div className={s.childrenContainer}>
        {`Do you really want to remove ${props.packName ? props.packName : packName}? All cards will be deleted.`}
      </div>
    </BaseModal>

  )
}

