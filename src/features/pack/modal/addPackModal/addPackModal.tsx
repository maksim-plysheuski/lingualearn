import { BaseModal } from 'common/components/baseModal/BaseModal'
import { SuperButton } from 'common/components/superButton/SuperButton'
import { useAppDispatch } from 'common/hooks'
import React, { useState } from 'react'
import { packsThunks } from '../../packs.slice'
import { toast } from 'react-toastify'
import { PackModalContent } from 'features/pack/modal/packModalContent/PackModalContent'


export const AddPackModal = () => {
  const dispatch = useAppDispatch()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [packCover, setPackCover] = useState<string>('')
  const [packName, setPackName] = useState<string>('')
  const [isPrivatePack, setIsPrivatePack] = useState<boolean>(false)
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false)

  const addPackHandler = async () => {
    setIsButtonDisabled(true)
    const newPack = { name: packName, private: isPrivatePack, deckCover: packCover }
    await dispatch(packsThunks.createPack(newPack)).unwrap()
      .then((res) => toast.info(`New pack ${res.newCardsPack.name} has been successfully created`))
      .catch((err) => toast.error(err.e.response ? err.e.response.data.error : err.e.message))
      .finally(() => {
        setIsModalOpen(false)
        setPackName('')
        setIsButtonDisabled(false)
      })
  }

  return (
    <BaseModal title={'Add New Pack'}
               titleButtonAction={'Add New Pack'}
               open={isModalOpen}
               disable={isButtonDisabled}
               setOpen={setIsModalOpen}
               actionCallback={addPackHandler}
               buttonOpen={<SuperButton title={'Add New Pack'} width={'175'} />}

    >
      <PackModalContent packValue={packName}
                        packCover={packCover}
                        isPrivatePack={isPrivatePack}
                        setPackValue={setPackName}
                        setPackCover={setPackCover}
                        setIsPrivate={setIsPrivatePack} />
    </BaseModal>
  )
}