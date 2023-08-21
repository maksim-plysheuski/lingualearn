import { BaseModal } from 'common/components'
import { useAppSelector } from 'common/hooks'
import React, { useState } from 'react'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import { toast } from 'react-toastify'
import { selectCardPackCover, selectPackId, selectPackName, selectPrivatePack } from 'features/cards/selectors/selectors'
import { PackBodyModal } from 'features/pack/components/modal/common/packBodyModal/PackBodyModal'
import { useUpdatePackMutation } from 'features/pack/service/packsApi'
import { TPack } from 'features/pack/service/packsTypes'

type Props = {
  handleCloseMenu?: () => void
  pack?: TPack
  nameIcon?: string
}

export const EditPackModal = (props: Props) => {
  const packName = useAppSelector(selectPackName)
  const packId = useAppSelector(selectPackId)
  const isPackPrivate = useAppSelector(selectPrivatePack)
  const cardPackCover = useAppSelector(selectCardPackCover)

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>(props.pack?.name || packName)
  const [isPrivatePack, setIsPrivatePack] = useState<boolean>(props.pack?.private || isPackPrivate || false)
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false)
  const [packCover, setPackCover] = useState<string>(props.pack?.deckCover || cardPackCover || '')
  const [updatePack] = useUpdatePackMutation()

  const updatePackHandler = async () => {
    let newPack = {
      _id: props.pack ? props.pack._id : packId,
      name: inputValue,
      private: isPrivatePack,
      deckCover: packCover
    }
    setIsButtonDisabled(true)
    updatePack(newPack).unwrap()
      .then(() => toast.info(`Pack has been successfully updated`))
      .catch((err) => toast.error(err.e.response ? err.e.response.statusText : err.e.message))
      .finally(() => {
        setIsModalOpen(false)
        setIsButtonDisabled(false)
      })
    if (props.handleCloseMenu) {
      props.handleCloseMenu()
    }
  }
  return (
    <BaseModal title={'Edit Pack'}
               titleButtonAction={'Save Changes'}
               open={isModalOpen}
               isButtonDisabled={isButtonDisabled}
               setOpen={setIsModalOpen}
               actionCallback={updatePackHandler}
               buttonOpen={<><DriveFileRenameOutlineIcon />{props.nameIcon}</>}

    >
      <PackBodyModal packValue={inputValue}
                     packCover={packCover}
                     isPrivatePack={isPrivatePack}
                     setPackValue={setInputValue}
                     setPackCover={setPackCover}
                     setIsPrivate={setIsPrivatePack} />
    </BaseModal>
  )
}