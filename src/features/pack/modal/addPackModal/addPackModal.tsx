import { BaseModal } from 'common/components/modals/baseModal/BaseModal'
import { SuperButton } from 'common/components/superButton/SuperButton'
import React, { useState } from 'react'
import { useAddPackMutation } from 'features/pack/service'
import { PackBodyModal } from 'features/pack/modal/commonPackModal/CommonPackModal'

export const AddPackModal = () => {
  const [addPack, { isLoading }] = useAddPackMutation()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [packCover, setPackCover] = useState<string>('')
  const [packName, setPackName] = useState<string>('')
  const [isPrivatePack, setIsPrivatePack] = useState<boolean>(false)


  const addPackHandler = async () => {
    await addPack({ name: packName, private: isPrivatePack, deckCover: packCover })
    setPackName('')
    setIsModalOpen(false)
  }

  return (
    <BaseModal title={'Add New Pack'} open={isModalOpen}
               setOpen={setIsModalOpen}
               titleButtonAction={'Add New Pack'}
               isButtonDisabled={isLoading}
               actionCallback={addPackHandler}
               buttonOpen={<SuperButton title={'Add New Pack'} width={'175'} />}
    >
      <PackBodyModal packValue={packName}
                     packCover={packCover}
                     isPrivatePack={isPrivatePack}
                     setPackValue={setPackName}
                     setPackCover={setPackCover}
                     setIsPrivate={setIsPrivatePack} />
    </BaseModal>
  )
}

