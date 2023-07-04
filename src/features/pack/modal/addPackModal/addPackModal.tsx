import { BaseModal } from 'common/components/baseModal/BaseModal'
import { InputCastom } from 'common/components/baseModal/inputCastom/InputCastom'
import { UniversalButton } from 'common/components/universalButton/UniversalButton'
import React, { useState } from 'react'
import { useAddPackMutation } from 'features/pack/service'


export const AddPackModal = () => {
  const [addPack] = useAddPackMutation()
  const [open, setOpen] = useState<boolean>(false)
  const [valuePack, setValueCard] = useState<string>('')
  const [privatePack, setPrivatePack] = useState<boolean>(false)
  const [disable, setDisable] = useState<boolean>(false)

  const addPackHandler = async () => {
    setDisable(true)
    await addPack({name:valuePack})
    setValueCard('')
    setOpen(false)
    setDisable(false)
  }

  return (
    <BaseModal title={'Add New Pack'}
               open={open}
               setOpen={setOpen}
               titleButtonAction={'Add New Pack'}
               actionCallback={addPackHandler}
               buttonOpen={<UniversalButton title={'Add New Pack'} width={'175'} />}
               disable={disable}
    >
      <>
        <InputCastom label={'Name Pack'} value={valuePack} setValue={setValueCard} />
        <div>
          <input type='checkbox' checked={privatePack} onClick={() => setPrivatePack(state => !state)} />
          <span>Private pack</span>
        </div>
      </>

    </BaseModal>
  )
}

