import { BaseModal } from 'common/components'
import { useAppSelector } from 'common/hooks'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { PackBodyModal } from 'features/pack/components/modal/common/packBodyModal/PackBodyModal'
import { selectIsAppLoading } from 'app'
import { SuperButton } from 'common/components'
import { useCreatePackMutation } from 'features/pack/service/packs.api'


export const AddPackModal = () => {
  const isLoading = useAppSelector(selectIsAppLoading)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [packCover, setPackCover] = useState<string>('')
  const [packName, setPackName] = useState<string>('')
  const [isPrivatePack, setIsPrivatePack] = useState<boolean>(false)
  const [createPack] = useCreatePackMutation()

  const addPackHandler = () => {
    createPack({ name: packName, private: isPrivatePack, deckCover: packCover }).unwrap()
      .then((res) => toast.info(`New pack ${res.newCardsPack.name} has been created`))
      .catch((err) => toast.error(err.data.error ? err.data.error : err.data.info))
      .finally(() => {
        setIsModalOpen(false)
        setPackName('')
      })
  }

  return (
    <BaseModal title={'Add New Pack'}
               titleButtonAction={'Add New Pack'}
               open={isModalOpen}
               isButtonDisabled={isLoading}
               setOpen={setIsModalOpen}
               actionCallback={addPackHandler}
               buttonOpen={<SuperButton title={'Add New Pack'} width={'175'} />}>
      <PackBodyModal packValue={packName}
                     packCover={packCover}
                     isPrivatePack={isPrivatePack}
                     setPackValue={setPackName}
                     setPackCover={setPackCover}
                     setIsPrivate={setIsPrivatePack} />
    </BaseModal>
  )
}