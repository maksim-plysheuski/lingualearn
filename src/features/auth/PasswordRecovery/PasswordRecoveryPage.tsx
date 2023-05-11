import s from 'features/auth/PasswordRecovery/PasswordRecoveryPage.module.scss'
import { FormControl } from '@mui/material'
import { InputEmail } from 'common/components/inputs/InputEmail'
import { NavLink } from 'react-router-dom'
import { UniversalButton } from 'common/components/Button/UniversalButton'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { emailSchema} from 'common/utils/schemas'
import { yupResolver } from '@hookform/resolvers/yup'

type InputType = yup.InferType<typeof emailSchema>

export const PasswordRecoveryPage = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<InputType>(
    {
      mode: 'onBlur',
      resolver: yupResolver(emailSchema)
    }
  )

  const onFormSubmit: SubmitHandler<InputType> = (data: InputType) => {

  }


  return (
    <div className={s.recoveryPasswordPage}>
      <div className={s.formContainer}>
        <h1>Forgot your password?</h1>
        <form onSubmit={handleSubmit(onFormSubmit)} className={s.form}>
          <FormControl >
            <InputEmail className={s.inputField}
                        register={register('email')}
                        errorMessage={errors.email?.message}
            />
            <span>Enter your address and we will send you further instructions</span>
            <UniversalButton title={'Sign In'} rounded={true} textColor={'white'} height={'36'} />
          </FormControl>
        </form>


        <p>Did you remember your password?</p>
        <NavLink className={s.registrationLink} to={'/registration'}>Try logging in</NavLink>
      </div>
    </div>
  )
}