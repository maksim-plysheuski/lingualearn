import { useAppDispatch } from 'app/hooks'
import { TitleForm } from 'common/components/title/titleForm/TitleForm'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { registrationSchema } from 'features/auth/register/registrationSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import s from './styles.module.scss'
import { EmailInput } from 'common/components/inputs/emailInput/emailInput'
import { PasswordInput } from 'common/components/inputs/passwordInput/passwordInput'
import { NavLink, useNavigate } from 'react-router-dom'
import { authThunks } from 'features/auth/auth.slice'

type RegistrationType = yup.InferType<typeof registrationSchema>
export const Register = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset
  } = useForm<RegistrationType>({ mode: 'onTouched', resolver: yupResolver(registrationSchema) })

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<RegistrationType> = ({ email, password }) => {
    dispatch(authThunks.registration({ email, password })).then(res => {
      if (res.payload) {
        navigate('/login')
        reset()
      }
    })
  }
  return (
    <div className={s.register}>
      <div className={s.container}>
        <TitleForm title={'Sign Up'} />
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <EmailInput register={register('email')}
                      errorMessage={errors.email?.message}
                      className={s.inputEmail}
          />
          <PasswordInput register={register('password')}
                         errorMessage={errors.password?.message}
                         className={s.inputPassword}
          />
          <PasswordInput register={register('passwordConfirmation')}
                         errorMessage={errors.passwordConfirmation?.message}
                         className={s.passwordConfirmation}
          />
          <button disabled={!isValid} className={s.button}>Sign Up</button>
        </form>
        <span>Already have an account?</span>
        <NavLink to={'/login'}>Sign In</NavLink>
      </div>
    </div>
  )
}
