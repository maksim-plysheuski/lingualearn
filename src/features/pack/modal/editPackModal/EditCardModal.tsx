import { BaseModal } from 'common/components/modals/baseModal/BaseModal'
import React, { useState } from 'react'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import { toast } from 'react-toastify'
import { useUpdatePackMutation } from 'features/pack/service'
import { CardPacksT } from 'features/pack/service/packSlice.type'
import { PackBodyModal } from 'features/pack/modal/commonPackModal/CommonPackModal'
import { useFetchCards } from 'features/cards/service'

type Props = {
  handleCloseMenu?: () => void
  pack?: CardPacksT
}


export const EditPackModal = (props: Props) => {
  const { pack } = props

  const { data: cards, packId } = useFetchCards()
  const [updatePack, { isLoading }] = useUpdatePackMutation()

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>(pack?.name! ?? cards?.packName)
  const [isPrivatePack, setIsPrivatePack] = useState<boolean>(pack?.private! ?? cards?.packPrivate)
  const [packCover, setPackCover] = useState<string>(pack?.deckCover! ?? cards?.packDeckCover)


  const updatePackHandler = async () => {
    let payload = { _id: pack?._id! ?? packId, name: inputValue, private: isPrivatePack, deckCover: packCover }
    await updatePack(payload).unwrap()
      .then(() => toast.info(`Pack has been updated`))
      .catch((err) => toast.error(err.e.response ? err.e.response.data.error : err.e.message))
      .finally(() => {
        setIsModalOpen(false)
      })
    if (props.handleCloseMenu) {
      props.handleCloseMenu()
    }
  }
  return (
    <BaseModal title={'Edit Pack'} open={isModalOpen} setOpen={setIsModalOpen} titleButtonAction={'Save Changes'}
               actionCallback={updatePackHandler} buttonOpen={<DriveFileRenameOutlineIcon />}
               isButtonDisabled={isLoading}
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