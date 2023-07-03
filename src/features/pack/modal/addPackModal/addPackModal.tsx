import { BaseModal } from 'common/components/baseModal/BaseModal'
import { SuperButton } from 'common/components/superButton/SuperButton'
import { useAppDispatch } from 'common/hooks'
import React, { useState } from 'react'
import { packsThunks } from '../../packs.slice'
import { toast } from 'react-toastify'
import { PackModalContent } from 'common/components/PackModal/PackModalContent'


export const AddPackModal = () => {
  const dispatch = useAppDispatch()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [packCover, setPackCover] = useState<string>('')
  const [packValue, setPackValue] = useState<string>('')
  const [isPrivatePack, setIsPrivatePack] = useState<boolean>(false)
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false)

  const addPackHandler = async () => {
    setIsButtonDisabled(true)
    const newPack = { name: packValue, private: isPrivatePack, deckCover: packCover }
    await dispatch(packsThunks.createPack(newPack)).unwrap()
      .then((res) => toast.success(`New pack ${res.newCardsPack.name} has been created`))
      .catch((err) => toast.error(err.e.response ? err.e.response.data.error : err.e.message))
      .finally(() => {
        setIsModalOpen(false)
        setPackValue('')
        setIsButtonDisabled(false)
      })
  }

  return (
    <BaseModal title={'Add New Pack'}
               open={isModalOpen}
               setOpen={setIsModalOpen}
               titleButtonAction={'Add New Pack'}
               actionCallback={addPackHandler}
               buttonOpen={<SuperButton title={'Add New Pack'} width={'175'} />}
               disable={isButtonDisabled}
    >
      <PackModalContent packValue={packValue}
                        packCover={packCover}
                        setPackValue={setPackValue}
                        isPrivatePack={isPrivatePack}
                        setIsPrivate={setIsPrivatePack}
                        setPackCover={setPackCover}
      />
    </BaseModal>
  )
}

