import React, { useState } from 'react'
import { BaseModal } from 'common/components'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useNavigate } from 'react-router-dom'
import s from './style.module.scss'
import { toast } from 'react-toastify'
import { useDeletePackMutation } from 'features/pack/service/packs.api'

type Props = {
  packId?: string
  packName?: string
  nameIcon?: string
}

export const RemovePackModal = (props: Props) => {
  const navigate = useNavigate()
  const [open, setOpen] = useState<boolean>(false)
  const [disable, setDisable] = useState<boolean>(false)
  const [removePack] = useDeletePackMutation()


  const removePackHandler = async () => {
    setDisable(true)
    removePack(props.packId ? props.packId : '').unwrap()
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
          <b>{`${props.packName}?`}</b>
        </span>
        <p>All cards will be deleted.</p>
      </div>
    </BaseModal>

  )
}

