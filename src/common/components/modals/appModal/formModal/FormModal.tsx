import s from 'common/components/modals/appModal/formModal/style.module.scss'
import { FormControl } from '@mui/material'
import { UniversalButton } from 'common/components/universalButton/UniversalButton'
import * as React from 'react'
import { FC, ReactNode } from 'react'
import { UseFormHandleSubmit, SubmitHandler } from 'react-hook-form'
import { TCreatePackInputs } from 'common/components/modals/packsModals/createPackModal/CreatePackModal'


type PropsType = {
  children: ReactNode
  handleSubmit: UseFormHandleSubmit<TCreatePackInputs>
  onSubmit: SubmitHandler<TCreatePackInputs>
  onClose: () => void
  buttonTitle: 'Save' | 'Delete'
}

export const FormModal: FC<PropsType> = ({
                                           children,
                                           handleSubmit,
                                           onSubmit,
                                           onClose,
                                           buttonTitle
                                         }) => {

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl className={s.form}>
        {children}
        <div className={s.buttons}>
          <UniversalButton title={'Close'}
                           onClickCallback={onClose}
                           marginTop={'35px'}
                           type={'button'}
                           width={'127'}
                           textColor={'black'}
          />
          <UniversalButton title={buttonTitle}
                           marginTop={'35px'}
                           width={'127'} />
        </div>
      </FormControl>
    </form>
  )
}