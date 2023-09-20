import { BaseModal } from 'common/components'
import React, { FC, memo } from 'react'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import { PackBodyModal } from 'features/pack/components/modal/common/packBodyModal/PackBodyModal'
import { useEditPacks } from 'features/pack/hook/useEditPacks'

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

  const {
    isPrivateHandler, openCloseHandler, updatePackHandler, inputValueHandler, coverHandler,
    isButtonDisabled, isPrivatePack, packCover, inputValue, isModalOpen
  } = useEditPacks(packId, packName, coverImage, isPrivate)

  const updatePack = () => {
    updatePackHandler()
    if (handleCloseMenu) handleCloseMenu()
  }


  return (
    <BaseModal title={'Edit Pack'}
               titleButtonAction={'Save Changes'}
               open={isModalOpen}
               isButtonDisabled={isButtonDisabled}
               setOpen={openCloseHandler}
               actionCallback={updatePack}
               buttonOpen={<><DriveFileRenameOutlineIcon />{nameIcon}</>}>
      <PackBodyModal packValue={inputValue}
                     packCover={packCover}
                     isPrivatePack={isPrivatePack}
                     setPackValue={inputValueHandler}
                     setPackCover={coverHandler}
                     setIsPrivate={isPrivateHandler} />
    </BaseModal>
  )
})