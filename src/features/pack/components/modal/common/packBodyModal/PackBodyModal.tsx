import s from './styles.module.scss'
import { InputCustom } from 'common/components/Inputs/inputCastom/InputCustom'
import { ImageBlockModal } from 'common/components'
import { Checkbox } from '@mui/material'
import React, { FC, memo } from 'react'


type Props = {
  packValue: string
  packCover: string
  isPrivatePack: boolean
  setPackValue: (newValue: string) => void
  setIsPrivate: (newValue: boolean) => void
  setPackCover: (newCover: string) => void
}

export const PackBodyModal: FC<Props> = memo((
  {
    packValue,
    packCover,
    isPrivatePack,
    setIsPrivate,
    setPackValue,
    setPackCover
  }) => {

  return (
    <>
      <ImageBlockModal coverImage={packCover} setCoverImage={setPackCover} />
      <div className={s.packNameBlock}>
        <InputCustom label={'Name Pack'} value={packValue} setValue={setPackValue} />
        <div className={s.checkBoxContainer}>
          <Checkbox id='checkbox-modal' checked={isPrivatePack} onClick={() => setIsPrivate(!isPrivatePack)} />
          <span>Private pack</span>
        </div>
      </div>
    </>
  )
})