import s from './styles.module.scss'
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined'
import { SuperButton } from 'common/components/superButton/SuperButton'
import { InputCustom } from 'common/components/baseModal/inputCastom/InputCustom'
import { Checkbox } from '@mui/material'
import React, { ChangeEvent, FC } from 'react'
import { convertFileToBase64 } from 'common/utils'
import { toast } from 'react-toastify'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

type Props = {
  packValue: string
  packCover: string
  isPrivatePack: boolean
  setPackValue: (newValue: string) => void
  setIsPrivate: (newValue: boolean) => void
  setPackCover: (newCover: string) => void
}

export const PackModalContent: FC<Props> = (
  {
    packValue,
    packCover,
    isPrivatePack,
    setIsPrivate,
    setPackValue,
    setPackCover
  }) => {

  const setCoverHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]
      if (file.size < 4000000) {
        convertFileToBase64(file, async (file64: string) => {
          setPackCover(file64)
        })
      } else {
        toast.error('Size is too lage')
      }
    }
  }

  return (
    <>
      <div className={s.coverBlock}>
        {packCover ?
          <>
            <img src={packCover} alt='pack image' />
            <div className={s.buttonContainer}>
              <label style={{ width: '100%' }}>
                <SuperButton title={'Change Cover'} isSpan={true} isGrayColor={true} marginTop={'24px'} />
                <input type='file' accept='image/*' onChange={setCoverHandler} />
              </label>
              <SuperButton isGrayColor={true}
                           isDeleteButton={true}
                           title={'Delete Cover'}
                           marginTop={'24px'}
                           marginLeft={'10px'}
                           onClickCallback={() => setPackCover('')}
                           icon={<DeleteOutlineIcon />} />
            </div>
          </>
          : <>
            <InsertPhotoOutlinedIcon sx={{ fontSize: '120px', marginTop: '20px' }} />
            <label className={s.buttonContainer}>
              <SuperButton title={'Change Cover'} isSpan={true} isGrayColor={true} marginTop={'24px'} />
              <input type='file' accept='image/*' onChange={setCoverHandler} />
            </label>
          </>
        }
      </div>
      <div className={s.packNameBlock}>
        <InputCustom label={'Name Pack'} value={packValue} setValue={setPackValue} />
        <div className={s.checkBoxContainer}>
          <Checkbox checked={isPrivatePack} onClick={() => setIsPrivate(!isPrivatePack)} />
          <span>Private pack</span>
        </div>
      </div>
    </>
  )
}