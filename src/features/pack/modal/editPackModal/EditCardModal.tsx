import { BaseModal } from 'common/components/baseModal/BaseModal'
import { InputCastom } from 'common/components/baseModal/inputCastom/InputCastom'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import React, { useState } from 'react'
import { packsThunks } from '../../packs.slice'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import { TPack } from 'features/pack/packApi'
import { toast } from 'react-toastify'
import { selectPackId, selectPackName, selectPrivatePack } from 'features/cards/selectors/cards.selector'

type Props = {
  handleCloseMenu?: () => void
  pack?: TPack
}


export const EditPackModal = (props: Props) => {
  const packName = useAppSelector(selectPackName)
  const packId = useAppSelector(selectPackId)
  const isPackPrivate = useAppSelector(selectPrivatePack)

  const dispatch = useAppDispatch()

  const [open, setOpen] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>(props.pack?.name || packName)
  const [isPrivatePack, setIsPrivatePack] = useState<boolean>(props.pack?.private || isPackPrivate)
  const [disable, setDisable] = useState<boolean>(false)

  const updatePack = async () => {
    let payload = {
      newPack: {
        _id: props.pack ? props.pack._id : packId,
        name: inputValue,
        private: isPrivatePack
      },
      needGetPacks: !!props.pack
    }
    setDisable(true)
    await dispatch(packsThunks.updatePack(payload)).unwrap()
      .then(() => toast.info(`Pack has been updated`))
      .catch((err) => toast.error(err.e.response ? err.e.response.data.error : err.e.message))
      .finally(() => {
        setOpen(false)
        setDisable(false)
      })
    if (props.handleCloseMenu) {
      props.handleCloseMenu()
    }
  }
  return (
    <BaseModal title={'Edit Pack'}
               open={open}
               setOpen={setOpen}
               titleButtonAction={'Save Changes'}
               actionCallback={updatePack}
               buttonOpen={<DriveFileRenameOutlineIcon />}
               disable={disable}
    >
      <>
        <InputCastom label={'Name Pack'} value={inputValue} setValue={setInputValue} />
        <div>
          <input type='checkbox' checked={isPrivatePack} onChange={() => setIsPrivatePack(state => !state)} />
          <span>Private pack</span>
        </div>
      </>

    </BaseModal>
  )
}