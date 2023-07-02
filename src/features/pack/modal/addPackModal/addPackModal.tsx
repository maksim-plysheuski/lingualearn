import { BaseModal } from 'common/components/baseModal/BaseModal'
import { InputCastom } from 'common/components/baseModal/inputCastom/InputCastom'
import { UniversalButton } from 'common/components/universalButton/UniversalButton'
import { useAppDispatch } from 'common/hooks'
import React, { ChangeEvent, useState } from 'react'
import { packsThunks } from '../../packs.slice'
import defAva from 'features/profile/components/imegs/defAva.png'
import { convertFileToBase64 } from 'common/utils'
import { toast } from 'react-toastify'
import s from './styles.module.scss'


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
      .then(() => toast.success('Cover Added'))
      .catch(err => toast.error('Error'))
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
               buttonOpen={<UniversalButton title={'Add New Pack'} width={'175'} />}
               disable={disable}
    >
      <>
        <div className={s.coverBlock}>
          <img src={deckCover ? deckCover : defAva} alt='pack image' />
          <label className={s.buttonContainer}>
            <UniversalButton title={'Change Cover'} isSpan={true} isGrayColor={true} marginTop={'24px'}/>
            <input type='file' onChange={uploadHandler} />
          </label>
        </div>

        <div className={s.packNameBlock}>
          <InputCastom label={'Name Pack'} value={valuePack} setValue={setValueCard} />
          <input type='checkbox' checked={privatePack} onClick={() => setPrivatePack(state => !state)} />
          <span>Private pack</span>
        </div>
      </>
    </BaseModal>
  )
}

