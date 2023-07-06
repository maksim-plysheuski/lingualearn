import { BaseModal } from 'common/components/baseModal/BaseModal'
import { InputCastom } from 'common/components/baseModal/inputCastom/InputCastom'
import { useAppSelector } from 'common/hooks'
import React, { useState } from 'react'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import { TPack } from 'features/pack/packApi'
import { toast } from 'react-toastify'
import { useUpdatePackMutation } from 'features/pack/service'

type Props = {
  handleCloseMenu?: () => void
  pack?: TPack
}


export const EditPackModal = (props: Props) => {
  const { pack, handleCloseMenu } = props

  const [updatePack, {isLoading}] = useUpdatePackMutation()
  const [open, setOpen] = useState<boolean>(false)

  const [inputValue, setInputValue] = useState<string>(pack?.name!||'' )
  const [isPrivatePack, setIsPrivatePack] = useState<boolean>(pack?.private!||false )


  const updatePackHandler = async () => {
    let payload = { _id:  pack?._id! , name: inputValue, private: isPrivatePack }


    await updatePack(payload).unwrap()
      .then(() => toast.info(`Pack has been updated`))
      .catch((err) => toast.error(err.e.response ? err.e.response.data.error : err.e.message))
      .finally(() => {
        setOpen(false)
      })
    if (props.handleCloseMenu) {
      props.handleCloseMenu()
    }
  }
  return (
    <BaseModal title={'Edit Pack'} open={open} setOpen={setOpen} titleButtonAction={'Save Changes'}
               actionCallback={updatePackHandler} buttonOpen={<DriveFileRenameOutlineIcon />} disable={isLoading}
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