import s from './style.module.scss'
import { Checkbox, TextField } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { packNameSchema } from 'common/components/modals/packsModals/createPackModal/packNameSchema'
import { useAppDispatch } from 'common/hooks'
import { packsThunks } from 'features/pack/packs.slice'
import { toast } from 'react-toastify'

import { AppModal } from 'common/components/modals/appModal/appModal/AppModal'
import * as React from 'react'
import { FormModal } from 'common/components/modals/appModal/formModal/FormModal'
import { FC } from 'react'


export type TCreatePackInputs = yup.InferType<typeof packNameSchema>

type PropsType = {
  isOpen: boolean
  handleClose: () => void
}

export const CreatePackModal: FC<PropsType> = ({ isOpen, handleClose }) => {
  const dispatch = useAppDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm<TCreatePackInputs>({
    mode: 'onBlur',
    resolver: yupResolver(packNameSchema)
  })


  const onSubmit: SubmitHandler<TCreatePackInputs> = (data: TCreatePackInputs) => {
    let payload = {
      name: data.packName,
      private: data.privatePack
    }
    console.log(data)
    dispatch(packsThunks.createPack(payload))
      .unwrap()
      .then(() => {
        toast.info(`Pack ${payload.name} has been added`)
        handleClose()
      })
      .catch((err) => toast.error(err.e.response ? err.e.response.data.error : err.e.message))
  }

  return (
    <AppModal title={'Add new pack'}
              isOpen={isOpen}
              handleClose={handleClose}
    >
      <FormModal buttonTitle={'Save'} handleSubmit={handleSubmit} onSubmit={onSubmit} onClose={handleClose}>
        <TextField
          type={'text'}
          label={'Name pack'}
          {...register('packName')}
          variant={'standard'}
          error={!!errors.packName?.message}
          helperText={errors.packName?.message}
          className={s.inputPackName}
        />
        <div className={s.checkbox}>
          <Checkbox id='rememberMe' {...register('privatePack')} />
          <span>Private pack</span>
        </div>
      </FormModal>
    </AppModal>
  )
}