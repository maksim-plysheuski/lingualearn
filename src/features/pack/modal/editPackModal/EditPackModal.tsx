import { BaseModal } from 'common/components/baseModal/BaseModal'
import { InputCustom } from 'common/components/baseModal/inputCastom/InputCustom'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import React, { useState } from 'react'
import { packsThunks } from '../../packs.slice'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import { TPack } from 'features/pack/packApi'
import { toast } from 'react-toastify'
import { selectPackId, selectPackName, selectPrivatePack } from 'features/cards/selectors/cards.selector'
import s from './styles.module.scss'
import { Checkbox } from '@mui/material'
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined'
import { SuperButton } from 'common/components/superButton/SuperButton'

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
  const [packCover, setPackCover] = useState<string>(props.pack?.deckCover || "")

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
        <div className={s.coverBlock}>
          {packCover
            ? <img src={packCover} alt='pack image' />
            : <InsertPhotoOutlinedIcon sx={{ fontSize: '120px', marginTop: '20px' }} />}
          <label className={s.buttonContainer}>
            <SuperButton title={'Change Cover'} isSpan={true} isGrayColor={true} marginTop={'24px'} />
            <input type='file' accept='image/*' onChange={() => {}} />
          </label>
        </div>
        <div className={s.packNameBlock}>
        <InputCustom label={'Name Pack'} value={inputValue} setValue={setInputValue} />
        <div className={s.checkBoxContainer}>
          <Checkbox checked={isPrivatePack} onClick={() => setIsPrivatePack(state => !state)} />
          <span>Private pack</span>
        </div>
        </div>
      </>
    </BaseModal>
  )
}