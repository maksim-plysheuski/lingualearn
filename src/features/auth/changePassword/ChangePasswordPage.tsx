import React from 'react'
import s from './style.module.scss'
import * as yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate, useParams } from 'react-router-dom'
import { authThunks } from 'features/auth/auth.slice'
import { InputPassword, SuperButton } from 'common/components'
import { passwordSchema } from 'features/auth/changePassword/passwordSchema'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { paths } from 'common/router'
import { loadingSelect } from 'app'


type Type = yup.InferType<typeof passwordSchema>

export const ChangePasswordPage = () => {
  const navigate = useNavigate()
  const isLoading = useAppSelector(loadingSelect)

  const {
    register,
    handleSubmit,
    formState: { errors }, getFieldState
  } = useForm<Type>({
    mode: 'onTouched',
    resolver: yupResolver(passwordSchema)
  })

  const dispatch = useAppDispatch()
  const { token } = useParams<{ token: string }>()

  const onSubmit: SubmitHandler<Type> = ({ password }) => {
    if (token) dispatch(authThunks.setNewPassword({ password, resetPasswordToken: token }))
      .then(() => navigate(paths.PASSWORD_CHANGED))
  }

  const isButtonDisabled = getFieldState('password').invalid

  return (
    <div className={s.page}>
      <div className={s.container}>
        <h1>Create new password</h1>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <InputPassword errorMessage={errors.password?.message} register={register('password')} />
          <span className={s.helperText}>Create new password and we will send you further instructions to email</span>
          <SuperButton title={'Change password'} isLoading={isLoading} disabled={isButtonDisabled} marginTop={'65px'} />
        </form>
      </div>
    </div>
  )
}

