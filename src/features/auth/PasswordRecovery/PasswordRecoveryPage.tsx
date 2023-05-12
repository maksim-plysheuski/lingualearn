import s from 'features/auth/PasswordRecovery/style.module.scss'
import { FormControl } from '@mui/material'
import { InputEmail } from 'common/components/Inputs/InputEmail'
import { NavLink } from 'react-router-dom'
import { UniversalButton } from 'common/components/Button/UniversalButton'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { forgotPasswordApi } from 'features/auth/PasswordRecovery/passwordRecovery.api'
import { emailSchema } from 'features/auth/PasswordRecovery/emailSchema'

type InputType = yup.InferType<typeof emailSchema>

export const PasswordRecoveryPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<InputType>(
    {
      mode: 'onBlur',
      resolver: yupResolver(emailSchema)
    }
  )

  const onFormSubmit: SubmitHandler<InputType> = (data: InputType) => {
    const payload = {
      email: data.email,
      message: `<div style='background-color: lime; padding: 15px'>
password recovery link: 
<a href='http://localhost:3000/set-new-password/$token$'>
link</a>
</div>`
    }

    forgotPasswordApi.sendEmail(payload)

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
                             margin={'0 0 31px 0'} />
          </FormControl>
        </form>
        <p>Did you remember your password?</p>
        <NavLink className={s.link} to={'/login'}>Try logging in</NavLink>
      </div>
    </div>
  )
}