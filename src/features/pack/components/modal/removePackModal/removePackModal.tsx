import React, { useState } from 'react'
import { BaseModal } from 'common/components'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { selectPackId, selectPackName } from 'features/cards/selectors/selectors'
import { packsThunks } from 'features/pack/service/packs.slice'
import { useNavigate } from 'react-router-dom'
import s from './style.module.scss'
import { toast } from 'react-toastify'

type Props = {
  packId?: string
  packName?: string
  nameIcon?: string
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
      .then((res) => toast.info(`Pack ${res.deletedCardsPack.name} has been removed`))
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
               buttonOpen={<><DeleteOutlineIcon />{props.nameIcon}</>}
               actionCallback={removePackHandler}
               titleButtonAction={'Delete Pack'}
               isButtonDisabled={disable}
    >
      <div className={s.textContainer}>
        <span>
          {`Do you really want to remove `}
          <b>{`${props.packName ? props.packName : packName}?`}</b>
        </span>
        <p>All cards will be deleted.</p>
      </div>
    </BaseModal>

  )
}

