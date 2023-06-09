import { BaseModal } from 'common/components/baseModal/BaseModal'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import React, { useState } from 'react'
import { packsThunks } from 'features/pack/packs.slice'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import { TPack } from 'features/pack/packApi'
import { toast } from 'react-toastify'
import { selectPackId, selectPackName, selectPrivatePack } from 'features/cards/selectors/selectors'
import { PackBodyModal } from 'features/pack/components/modal/common/packBodyModal/PackBodyModal'

type Props = {
  handleCloseMenu?: () => void
  pack?: TPack
}

export const EditPackModal = (props: Props) => {
  const dispatch = useAppDispatch()
  const packName = useAppSelector(selectPackName)
  const packId = useAppSelector(selectPackId)
  const isPackPrivate = useAppSelector(selectPrivatePack)

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>(props.pack?.name || packName)
  const [isPrivatePack, setIsPrivatePack] = useState<boolean>(props.pack?.private || isPackPrivate)
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false)
  const [packCover, setPackCover] = useState<string>(props.pack?.deckCover || '')

  const updatePack = async () => {
    let payload = {
      newPack: {
        _id: props.pack ? props.pack._id : packId,
        name: inputValue,
        private: isPrivatePack,
        deckCover: packCover
      },
      needGetPacks: !!props.pack
    }
    setIsButtonDisabled(true)
    await dispatch(packsThunks.updatePack(payload)).unwrap()
      .then(() => toast.info(`Pack has been successfully updated`))
      .catch((err) => toast.error(err.e.response ? err.e.response.data.error : err.e.message))
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
               actionCallback={updatePack}
               buttonOpen={<DriveFileRenameOutlineIcon />}

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