import s from 'features/auth/forgotPassword/style.module.scss'
import { FormControl } from '@mui/material'
import { InputEmail } from 'common/components/Inputs/InputEmail'
import { Link } from 'react-router-dom'
import { UniversalButton } from 'common/components/button/UniversalButton'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { forgotPasswordApi } from 'features/auth/forgotPassword/forgotPassword.api'
import { emailSchema } from 'features/auth/forgotPassword/emailSchema'
import { paths } from 'common/router/path'
import { useState } from 'react'
import { CheckEmailPage } from 'features/auth/checkEmail/CheckEmailPage'
import { emailMessage } from 'features/auth/forgotPassword/emailMessage'

type InputType = yup.InferType<typeof emailSchema>

export const ForgotPasswordPage = () => {
  const [showCheckEmail, setShowCheckEmail] = useState<boolean>(false)
  const { register, handleSubmit, formState: { errors }, getValues } = useForm<InputType>({
      mode: 'onBlur',
      resolver: yupResolver(emailSchema)
    }
  )

  const onFormSubmit: SubmitHandler<InputType> = (data: InputType) => {
    const payload = {
      email: data.email,
      message: emailMessage()
    }
    forgotPasswordApi.sendEmail(payload).then(() => setShowCheckEmail(true))
  }


  if (showCheckEmail) {
    return <CheckEmailPage email={getValues('email')} />
  }

  return (
    <div className={s.recoveryPasswordPage}>
      <div className={s.formContainer}>
        <h1>Forgot your password?</h1>
        <form onSubmit={handleSubmit(onFormSubmit)} className={s.form}>
          <FormControl>
            <InputEmail className={s.inputField}
                        register={register('email')}
                        errorMessage={errors.email?.message}
            />
            <span>
              Enter your address and we will send you further instructions
            </span>
            <UniversalButton title={'Send Instructions'}
                             rounded={true}
                             textColor={'white'}
                             height={'36'}
                             margin={'60px 0 0 0'} />
          </FormControl>
        </form>
        <p className={s.descriptionText}>Did you remember your password?</p>
        <Link className={s.link} to={paths.LOGIN}>Try logging in</Link>
      </div>
    </div>
  )
}