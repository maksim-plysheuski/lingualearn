import s from './style.module.scss'
import { Checkbox, TextField } from '@mui/material'
import { AppModal } from 'features/modals/appModal/appModal/AppModal'
import * as React from 'react'
import { FormModal } from 'features/modals/appModal/formModal/FormModal'
import { useModals } from 'common/hooks/useModals'
import { useFormModals } from 'common/hooks/useFormModals'
import { InputText } from 'common/components/Inputs/InputText'


export const CreatePackModal = () => {
  const { createPack, closeModal, isCreateModalOpen } = useModals()
  const { register, handleSubmit, onSubmitHandler, errors, reset } = useFormModals(createPack)

  const close = () => {
    reset()
    closeModal()
  }

  return (
    <AppModal title={'Add new pack'}
              isOpen={isCreateModalOpen}
              handleClose={close}
    >
      <FormModal buttonTitle={'Save'}
                 isButtonDisable={!!errors.packName}
                 handleSubmit={handleSubmit}
                 onSubmit={onSubmitHandler}
                 onClose={close}>
        <InputText label={'terxt'} value={'he'} setValue={() => {}} />
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