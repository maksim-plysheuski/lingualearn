import React from 'react'
import s from 'features/auth/changePassword/style.module.scss'
import * as yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate, useParams } from 'react-router-dom'
import { authThunks } from 'features/auth/auth.slice'
import { InputPassword } from 'common/components'
import { passwordSchema } from 'features/auth/changePassword/passwordSchema'
import { useAppDispatch } from 'common/hooks'
import { UniversalButton } from 'common/components/universalButton/UniversalButton'
import { paths } from 'common/router/path'


type Type = yup.InferType<typeof passwordSchema>

export const ChangePasswordPage = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }, getFieldState
  } = useForm<Type>({
    mode: 'onBlur',
    resolver: yupResolver(passwordSchema)
  })

  const dispatch = useAppDispatch()
  const { token } = useParams<{ token: string }>()

  const onSubmit: SubmitHandler<Type> = ({ password }) => {
    if (token) dispatch(authThunks.newPassword({ password, resetPasswordToken: token }))
      .then(() => navigate(paths.PASSWORD_CHANGED))
  }

  const isButtonDisabled = getFieldState('password').invalid

  return (
    <div className={s.page}>
      <div className={s.container}>
        <span className={s.title}>Create new password</span>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <InputPassword className={s.inputPassword}
                         errorMessage={errors.password?.message}
                         register={register('password')} />
          <span className={s.helperText}>Create new password and we will send you further instructions to email</span>
          <UniversalButton title={'Change password'} disabled={isButtonDisabled} marginTop={'35px'} />
        </form>
      </div>
    </div>
  )
}

