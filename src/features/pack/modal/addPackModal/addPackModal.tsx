import { BaseModal } from 'common/components/baseModal/BaseModal'
import { InputCustom } from 'common/components/baseModal/inputCastom/InputCustom'
import { SuperButton } from 'common/components/superButton/SuperButton'
import { useAppDispatch } from 'common/hooks'
import React, { ChangeEvent, useState } from 'react'
import { packsThunks } from '../../packs.slice'
import { convertFileToBase64 } from 'common/utils'
import { toast } from 'react-toastify'
import s from './styles.module.scss'
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined'
import { Checkbox } from '@mui/material'


export const AddPackModal = () => {
  const dispatch = useAppDispatch()
  const [open, setOpen] = useState<boolean>(false)
  const [valuePack, setValueCard] = useState<string>('')
  const [privatePack, setPrivatePack] = useState<boolean>(false)
  const [disable, setDisable] = useState<boolean>(false)
  const [deckCover, setDeckCover] = useState<string>('')

  const addPackHandler = async () => {
    setDisable(true)
    const newPack = { name: valuePack, private: privatePack, deckCover: deckCover }
    await dispatch(packsThunks.createPack(newPack)).unwrap()
      .then((res) => toast.success(`New pack ${res.newCardsPack.name} has been created`))
      .catch(() => toast.error('Size is too lage'))
      .finally(() => {
        setValueCard('')
        setOpen(false)
        setDisable(false)
      })
  }

  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]
      if (file.size < 4000000) {
        convertFileToBase64(file, async (file64: string) => {
          setDeckCover(file64)
        })
      } else {
        console.error('Error: ', 'Файл слишком большого размера')
      }
    }
  }

  return (
    <BaseModal title={'Add New Pack'}
               open={open}
               setOpen={setOpen}
               titleButtonAction={'Add New Pack'}
               actionCallback={addPackHandler}
               buttonOpen={<SuperButton title={'Add New Pack'} width={'175'} />}
               disable={disable}
    >
      <>
        <div className={s.coverBlock}>
          {deckCover
            ? <img src={deckCover} alt='pack image' />
            : <InsertPhotoOutlinedIcon sx={{ fontSize: '120px', marginTop: '20px' }} />}
          <label className={s.buttonContainer}>
            <SuperButton title={'Change Cover'} isSpan={true} isGrayColor={true} marginTop={'24px'} />
            <input type='file' accept='image/*' onChange={uploadHandler} />
          </label>
        </div>
        <div className={s.packNameBlock}>
          <InputCustom label={'Name Pack'} value={valuePack} setValue={setValueCard} />
          <div className={s.checkBoxContainer}>
            <Checkbox checked={privatePack} onClick={() => setPrivatePack(state => !state)} />
            <span>Private pack</span>
          </div>
        </div>
      </>
    </BaseModal>
  )
}

