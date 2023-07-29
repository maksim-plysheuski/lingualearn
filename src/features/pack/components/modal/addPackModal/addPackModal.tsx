import { BaseModal } from 'common/components'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import React, { useState } from 'react'
import { packsThunks } from 'features/pack/packs.slice'
import { toast } from 'react-toastify'
import { PackBodyModal } from 'features/pack/components/modal/common/packBodyModal/PackBodyModal'
import { selectIsAppLoading } from 'app'
import { SuperButton } from 'common/components'


export const AddPackModal = () => {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(selectIsAppLoading)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [packCover, setPackCover] = useState<string>('')
  const [packName, setPackName] = useState<string>('')
  const [isPrivatePack, setIsPrivatePack] = useState<boolean>(false)

  const addPackHandler = async () => {
    const newPack = { name: packName, private: isPrivatePack, deckCover: packCover }
    await dispatch(packsThunks.createPack(newPack)).unwrap()
      .then((res) => toast.info(`New pack ${res.newCardsPack.name} has been created`))
      .catch((err) => toast.error(err.e.response ? err.e.response.statusText : err.e.message))
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