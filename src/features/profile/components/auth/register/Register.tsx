import s from 'features/profile/components/auth/register/style.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useNavigate } from 'react-router-dom'
import { authThunks } from 'features/profile/profile.slice'
import { InputEmail, InputPassword } from 'common/components'
import { registerSchema } from 'features/profile/components/auth/register/registerSchema'
import { useAppDispatch } from 'common/hooks'
import { path } from 'common/router/path'
import { UniversalButton } from 'common/components/universalButton/UniversalButton'


type Type = yup.InferType<typeof registerSchema>


export const Register = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors }, getFieldState } = useForm<Type>({
    mode: 'onTouched',
    resolver: yupResolver(registerSchema)
  })

  const onSubmit: SubmitHandler<Type> = ({ email, password }) => {
    dispatch(authThunks.register({ email, password })).then((res) => {
      if (res.payload) {
        navigate(path.LOGIN)
      }
    })
  }

  const isButtonDisabled = getFieldState('password').invalid || getFieldState('email').invalid
  const { email, password, passwordConfirmation } = errors
  return (
    <div className={s.register}>
      <div className={s.container}>
        <span className={s.title}>Sign Up</span>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <InputEmail errorMessage={email?.message} register={register('email')} />
          <InputPassword errorMessage={password?.message} register={register('password')} />
          <InputPassword errorMessage={passwordConfirmation?.message} register={register('passwordConfirmation')} />
          <UniversalButton title={'Sign Up'} disabled={isButtonDisabled} marginTop={'78px'} />
        </form>
        <span className={s.helpText}>Already have an account?</span>
        <Link className={s.link} to={path.LOGIN}>Sign In</Link>
      </div>
    </div>
  )
}
