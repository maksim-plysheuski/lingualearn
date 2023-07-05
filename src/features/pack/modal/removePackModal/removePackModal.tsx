import React, { useState } from 'react'
import { BaseModal } from 'common/components/baseModal/BaseModal'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useNavigate, useParams } from 'react-router-dom'
import s from './style.module.scss'
import { toast } from 'react-toastify'
import { useRemovePackMutation } from 'features/pack/service'

type Props = {
  packId?: string
  packName?: string
  nameIcon?: string
}

export const RemovePackModal = (props: Props) => {
  const { nameIcon } = props
  const [removePack] = useRemovePackMutation()
  const { id } = useParams<{ id: string }>()
  const packId = props.packId ?? id
  const navigate = useNavigate()
  const [open, setOpen] = useState<boolean>(false)
  const [disable, setDisable] = useState<boolean>(false)

  const removePackHandler = async () => {
    setDisable(true)
    await removePack({ id: packId! }).unwrap()
      .then((res) => toast.info(`Pack ${res.deletedCardsPack.name} has been removed`))
      .catch((err) => toast.error(err.e.response ? err.e.response.data.error : err.e.message))
      .finally(() => {
        navigate('/packs')
        setOpen(false)
        setDisable(false)
      })
  }

  return (
    <BaseModal title={'Delete Pack'} open={open} setOpen={setOpen} buttonOpen={<><DeleteOutlineIcon />{nameIcon}</>}
               actionCallback={removePackHandler} titleButtonAction={'Delete Pack'} disable={disable}>
      <div
        className={s.childrenContainer}>{`Do you really want to remove ${props.packName}? All cards will be deleted.`}
      </div>
    </BaseModal>

  )
}

