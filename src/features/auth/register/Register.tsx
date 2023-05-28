import s from 'features/auth/register/style.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { NavLink, useNavigate } from 'react-router-dom'
import { authThunks } from 'features/auth/auth.slice'
import { InputEmail, InputPassword } from 'common/components'
import { registerSchema } from 'features/auth/register/registerSchema'
import { useAppDispatch } from 'common/hooks'
import { paths } from 'common/router/path'
import { UniversalButton } from 'common/components/button/UniversalButton'


type Type = yup.InferType<typeof registerSchema>


export const Register = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<Type>({
    mode: 'onBlur',
    resolver: yupResolver(registerSchema)
  })

  const onSubmit: SubmitHandler<Type> = ({ email, password }) => {
    console.log('hi')
    dispatch(authThunks.register({ email, password })).then((res) => {

      if (res.payload) {
        navigate(paths.LOGIN)
      }
    })
  }

  return (
    <div className={s.register}>
      <div className={s.container}>
        <span className={s.title}>Sign Up</span>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <InputEmail className={s.inputEmail}
                      errorMessage={errors.email?.message}
                      register={register('email')}
          />
          <InputPassword className={s.inputPassword}
                         errorMessage={errors.password?.message}
                         register={register('password')}
          />
          <InputPassword className={s.passwordConfirmation}
                         errorMessage={errors.passwordConfirmation?.message}
                         register={register('passwordConfirmation')}
          />
          <UniversalButton title={'Sign Up'} rounded={true} textColor={'white'} height={'36'} margin={'95px 0 0 0'} />
        </form>
        <span className={s.helpText}>Already have an account?</span>
        <NavLink className={s.link} to={paths.LOGIN}>Sign In</NavLink>
      </div>
    </div>
  )
}
