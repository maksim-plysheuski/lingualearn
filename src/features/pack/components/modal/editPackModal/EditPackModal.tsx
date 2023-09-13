import { BaseModal } from 'common/components'
import React, { FC, memo, useState } from 'react'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import { toast } from 'react-toastify'
import { PackBodyModal } from 'features/pack/components/modal/common/packBodyModal/PackBodyModal'
import { useUpdatePackMutation } from 'features/pack/service/packs.api'

type Props = {
  packId: string
  packName: string
  coverImage: string
  isPrivate: boolean
  nameIcon?: string
  handleCloseMenu?: () => void
}

export const EditPackModal: FC<Props> = memo(({
                                                packId,
                                                packName,
                                                isPrivate,
                                                coverImage,
                                                nameIcon,
                                                handleCloseMenu
                                              }) => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>(packName)
  const [isPrivatePack, setIsPrivatePack] = useState<boolean>(isPrivate)
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false)
  const [packCover, setPackCover] = useState<string>(coverImage)
  const [updatePack] = useUpdatePackMutation()

  const updatePackHandler = async () => {
    let newPack = {
      _id: packId,
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
    if (handleCloseMenu) {
      handleCloseMenu()
    }
  }
  return (
    <BaseModal title={'Edit Pack'}
               titleButtonAction={'Save Changes'}
               open={isModalOpen}
               isButtonDisabled={isButtonDisabled}
               setOpen={setIsModalOpen}
               actionCallback={updatePackHandler}
               buttonOpen={<><DriveFileRenameOutlineIcon />{nameIcon}</>}

    >
      <PackBodyModal packValue={inputValue}
                     packCover={packCover}
                     isPrivatePack={isPrivatePack}
                     setPackValue={setInputValue}
                     setPackCover={setPackCover}
                     setIsPrivate={setIsPrivatePack} />
    </BaseModal>
  )
})