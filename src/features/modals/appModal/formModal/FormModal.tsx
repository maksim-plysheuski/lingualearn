import s from './style.module.scss'
import { FormControl } from '@mui/material'
import { UniversalButton } from 'common/components/universalButton/UniversalButton'
import * as React from 'react'
import { FC, ReactNode } from 'react'
import { UseFormHandleSubmit, SubmitHandler } from 'react-hook-form'
import { InputsType } from 'common/hooks/useFormModals'


type PropsType = {
  children: ReactNode
  handleSubmit: UseFormHandleSubmit<InputsType>
  onSubmit: SubmitHandler<InputsType>
  onClose: () => void
  buttonTitle: 'Save' | 'Delete'
  isButtonDisable?: boolean
}

export const FormModal: FC<PropsType> = ({
                                           children,
                                           handleSubmit,
                                           onSubmit,
                                           onClose,
                                           buttonTitle,
                                           isButtonDisable
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
          />
          <UniversalButton title={buttonTitle}
                           marginTop={'35px'}
                           width={'127'} disabled={isButtonDisable} />
        </div>
      </FormControl>
    </form>
  )
}