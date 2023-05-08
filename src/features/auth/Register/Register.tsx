import s from 'features/auth/Register/style.module.scss'
import { InputEmail } from 'common/components/inputs/InputEmail'
import { InputPassword } from 'common/components/inputs/InputPassword'
import { SubmitHandler, useForm } from 'react-hook-form'
import { registrationSchema } from 'features/auth/Register/ShemaRegister'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'app/hooks'
import { authThunks } from 'features/auth/auth.slice'


type LoginType = yup.InferType<typeof registrationSchema>
export const Register = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<LoginType>({
    mode: 'onBlur',
    resolver: yupResolver(registrationSchema)
  })
  const onSubmit: SubmitHandler<LoginType> = ({ email, password }) => {
    dispatch(authThunks.register({ email, password })).then((res) => {
      if (res.payload) {
        navigate('/login')
      }
    })
  }

  return (
    <div className={s.register}>
      <div className={s.container}>
        <span>Sign Up</span>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <InputEmail className={s.inputEmail}
                      errorMessage={errors.email?.message}
                      register={register('email')}
          />
          <InputPassword className={s.passwordConfirmation}
                         errorMessage={errors.password?.message}
                         register={register('password')}
          />
          <InputPassword className={s.inputEmail}
                         errorMessage={errors.passwordConfirmation?.message}
                         register={register('passwordConfirmation')}
          />
          <button className={s.button} type='submit' disabled={!isValid}>Sign In</button>
        </form>
        <span className={s.helpText}>Already have an account?</span>
        <NavLink to={s.link}>Sign Up</NavLink>
      </div>
    </div>
  )
}
