import { useState } from 'react'
import { useUpdatePackMutation } from 'features/pack/service/packs.api'
import { toast } from 'react-toastify'


export const useEditPacks = (packId?: string,
                             packName?: string,
                             coverImage?: string,
                             isPrivate?: boolean) => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>(packName!)
  const [isPrivatePack, setIsPrivatePack] = useState<boolean>(isPrivate!)
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false)
  const [packCover, setPackCover] = useState<string>(coverImage!)
  const [updatePack] = useUpdatePackMutation()


  const openCloseHandler = (isOpen: boolean) => setIsModalOpen(isOpen)
  const inputValueHandler = (inputValue: string) => setInputValue(inputValue)
  const coverHandler = (cover: string) => setPackCover(cover)
  const isPrivateHandler = (isPrivatePack: boolean) => setIsPrivatePack(isPrivatePack)

  const updatePackHandler = () => {
    setIsButtonDisabled(true)
    updatePack({ _id: packId!, name: inputValue, private: isPrivate, deckCover: packCover }).unwrap()
      .then(() => toast.info(`Pack has been successfully updated`))
      .catch((err) => toast.error(err.data.error ? err.data.error : err.data.info))
      .finally(() => {
        setIsModalOpen(false)
        setIsButtonDisabled(false)
      })
  }

  return {
    isButtonDisabled,
    openCloseHandler,
    updatePackHandler,
    inputValueHandler,
    isPrivateHandler,
    coverHandler,
    isPrivatePack,
    isModalOpen,
    inputValue,
    packCover
  }
}