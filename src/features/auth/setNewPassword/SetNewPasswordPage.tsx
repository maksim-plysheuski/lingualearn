import React from 'react'
import s from './style.module.scss'
import * as yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useParams } from 'react-router-dom'
import { authThunks } from 'features/auth/auth.slice'
import { InputPassword } from 'common/components'
import { passwordSchema } from 'features/auth/setNewPassword/passwordSchema'
import { useAppDispatch } from 'common/hooks'
import { UniversalButton } from 'common/components/button/UniversalButton'


type Type = yup.InferType<typeof passwordSchema>

export const SetNewPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<Type>({
    mode: 'onBlur',
    resolver: yupResolver(passwordSchema)
  })

  const dispatch = useAppDispatch()
  const { token } = useParams<{ token: string }>()

  const onSubmit: SubmitHandler<Type> = ({ password }) => {
    if (token) dispatch(authThunks.newPassword({ password, resetPasswordToken: token }))
  }

  return (
    <div className={s.page}>
      <div className={s.container}>
        <span className={s.title}>Create new password</span>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <InputPassword className={s.inputPassword}
                         errorMessage={errors.password?.message}
                         register={register('password')} />
          <span className={s.helperText}>Create new password and we will send you further instructions to email</span>
          <UniversalButton title={'Sign Up'} rounded={true} textColor={'white'} height={'36'} margin={'35px 0 0 0'} />
        </form>
      </div>
    </div>
  )
}

