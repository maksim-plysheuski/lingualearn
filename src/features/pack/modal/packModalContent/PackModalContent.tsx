import s from './styles.module.scss'
import { InputCustom } from 'common/components/baseModal/inputCastom/InputCustom'
import { CoverModalBlock } from 'features/cards/components/modal/cardsModalContent/CoverModalBlock'
import { Checkbox } from '@mui/material'
import React, { FC } from 'react'


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

  return (
    <>
      <CoverModalBlock coverImage={packCover} setCoverImage={setPackCover} />
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