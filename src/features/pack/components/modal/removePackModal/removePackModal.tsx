import React, { FC, memo, useState } from 'react'
import { BaseModal } from 'common/components'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useNavigate } from 'react-router-dom'
import s from './style.module.scss'
import { toast } from 'react-toastify'
import { useDeletePackMutation } from 'features/pack/service/packs.api'
import { routePaths } from 'common/router'

type Props = {
  packId: string
  packName: string
  nameIcon?: string
}

export const RemovePackModal: FC<Props> = memo(({ packId, packName, nameIcon }) => {
  const navigate = useNavigate()
  const [open, setOpen] = useState<boolean>(false)
  const [disable, setDisable] = useState<boolean>(false)
  const [removePack] = useDeletePackMutation()

  const removePackHandler = () => {
    setDisable(true)
    removePack(packId).unwrap()
      .then((res) => toast.info(`Pack ${res.deletedCardsPack.name} has been removed`))
      .catch((err) => toast.error(err.data.error ? err.data.error : err.data.info))
      .finally(() => {
        navigate(routePaths.PACKS)
        setOpen(false)
        setDisable(false)
      })
  }

  return (
    <BaseModal title={'Delete Pack'}
               open={open}
               setOpen={setOpen}
               buttonOpen={<><DeleteOutlineIcon />{nameIcon}</>}
               actionCallback={removePackHandler}
               titleButtonAction={'Delete Pack'}
               isButtonDisabled={disable}>
      <div className={s.textContainer}>
        <span>{`Do you really want to remove `}<b>{`${packName}?`}</b></span>
        <p>All cards will be deleted.</p>
      </div>
    </BaseModal>

  )
})

