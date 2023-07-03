import s from 'features/auth/forgotPassword/style.module.scss'
import { FormControl } from '@mui/material'
import { InputEmail } from 'common/components/Inputs/InputEmail'
import { Link } from 'react-router-dom'
import { SuperButton } from 'common/components/superButton/SuperButton'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { forgotPasswordApi } from 'features/auth/forgotPassword/forgotPassword.api'
import { emailSchema } from 'features/auth/forgotPassword/emailSchema'
import { paths } from 'common/router/path'
import { useState } from 'react'
import { CheckEmailPage } from 'features/auth/checkEmail/CheckEmailPage'
import { emailMessage } from 'features/auth/forgotPassword/emailMessage'
import { useAppSelector } from 'common/hooks'

type InputType = yup.InferType<typeof emailSchema>

export const ForgotPasswordPage = () => {
  const [showCheckEmail, setShowCheckEmail] = useState<boolean>(false)
  const isLoading = useAppSelector(state => state.app.isLoading)
  const { register, handleSubmit, formState: { errors }, getFieldState, getValues } = useForm<InputType>({
    mode: 'onTouched',
    resolver: yupResolver(emailSchema)
  })

  const onFormSubmit: SubmitHandler<InputType> = (data: InputType) => {
    const payload = {
      email: data.email,
      message: emailMessage()
    }
    forgotPasswordApi.sendEmail(payload).then(() => setShowCheckEmail(true))
  }

  const isButtonDisabled = getFieldState('email').invalid

  if (showCheckEmail) {
    return <CheckEmailPage email={getValues('email')} />
  }

  return (
    <div className={s.recoveryPasswordPage}>
      <div className={s.formContainer}>
        <h1>Forgot your password?</h1>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <FormControl className={s.form}>
            <InputEmail register={register('email')} errorMessage={errors.email?.message} />
            <span className={s.descriptionText}>
              Enter your address and we will send you further instructions
            </span>
            <SuperButton title={'Send Instructions'}
                         isLoading={isLoading}
                         disabled={isButtonDisabled}
                         marginTop={'60px'} />
          </FormControl>
        </form>
        <p className={s.descriptionText}>Did you remember your password?</p>
        <Link className={s.link} to={paths.LOGIN}>Try logging in</Link>
      </div>
    </div>
  )
}