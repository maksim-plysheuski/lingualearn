import s from './style.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useNavigate } from 'react-router-dom'
import { InputEmail, InputPassword, SuperButton } from 'common/components'
import { registerSchema } from 'features/auth/register/registerSchema'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { paths } from 'common/router'
import { selectIsAppLoading } from 'app'
import { authThunks } from 'features/auth'


type Type = yup.InferType<typeof registerSchema>


export const Register = () => {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(selectIsAppLoading)
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors }, getFieldState } = useForm<Type>({
    mode: 'onTouched',
    resolver: yupResolver(registerSchema)
  })

  const onSubmit: SubmitHandler<Type> = ({ email, password }) => {
    dispatch(authThunks.register({ email, password })).then((res) => {
      if (res.payload) {
        navigate(paths.LOGIN)
      }
    })
  }

  const isButtonDisabled = getFieldState('password').invalid || getFieldState('email').invalid

  return (
    <div className={s.register}>
      <div className={s.container}>
        <span className={s.title}>Sign Up</span>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <InputEmail errorMessage={errors.email?.message} register={register('email')} />
          <InputPassword errorMessage={errors.password?.message} register={register('password')} />
          <InputPassword errorMessage={errors.passConfirmation?.message} register={register('passConfirmation')} idAttribute={'passwordConfirm'} />
          <SuperButton title={'Sign Up'} isLoading={isLoading} disabled={isButtonDisabled} marginTop={'78px'} />
        </form>
        <span className={s.helpText}>Already have an account?</span>
        <Link className={s.link} to={paths.LOGIN}>Sign In</Link>
      </div>
    </div>
  )
}
