import { BaseModal } from 'common/components/baseModal/BaseModal'
import { InputCastom } from 'common/components/baseModal/inputCastom/InputCastom'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import React, { useState } from 'react'
import { packsThunks } from '../../packs.slice'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'


export const EditPackModal = () => {

  const packName = useAppSelector(state => state.cards.cards.packName)
  const packPrivate = useAppSelector(state => state.cards.cards.packPrivate)
  const cardsPack_id = useAppSelector(state => state.cards.cardsParams.cardsPack_id)
  const dispatch = useAppDispatch()

  const [open, setOpen] = useState<boolean>(false)
  const [valuePack, setValueCard] = useState<string>(packName)
  const [privatePack, setPrivatePack] = useState<boolean>(packPrivate)
  const [disable, setDisable] = useState<boolean>(false)

  const editPackHandler = async () => {
    setDisable(true)
    await dispatch(packsThunks.updatePack({ _id: cardsPack_id, name: valuePack, private: privatePack }))
    setValueCard('')
    setOpen(false)
    setDisable(false)
  }

  return (
    <BaseModal title={'Edit Pack'}
               open={open}
               setOpen={setOpen}
               titleButtonAction={'Save Changes'}
               actionCallback={editPackHandler}
               buttonOpen={<><DriveFileRenameOutlineIcon />Edit</>}
               disable={disable}
    >
      <>
        <InputCastom label={'Name Pack'} value={valuePack} setValue={setValueCard} />
        <div>
          <input type='checkbox' checked={privatePack} onChange={() => setPrivatePack(state => !state)} />
          <span>Private pack</span>
        </div>
      </>

    </BaseModal>
  )
}