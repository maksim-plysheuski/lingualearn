import { useForm, SubmitHandler } from 'react-hook-form'
import { Checkbox, FormControl } from '@mui/material'
import s from 'features/auth/Login/styles.module.scss'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { authThunks } from 'features/auth/auth.slice'
import { InputEmail } from 'common/components/Inputs/InputEmail'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from 'common/utils/schemas'
import { InputPassword } from 'common/components/Inputs/InputPassword'
import { UniversalButton } from 'common/components/Button/UniversalButton'
import * as yup from 'yup'



type InputsType = yup.InferType<typeof loginSchema>

export const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)


  const { register, handleSubmit, formState: { errors } } = useForm<InputsType>({
    mode: 'onBlur',
    resolver: yupResolver(loginSchema)
  })

  const onSubmit: SubmitHandler<InputsType> = (data: InputsType) => {
    dispatch(authThunks.login(data))
  }


  if (isLoggedIn) {
    navigate('/profile')
  }

  return (
    <div className={s.loginPage}>
      <div className={s.formContainer}>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl className={s.form}>
            <InputEmail className={s.inputField}
                        register={register('email')}
                        errorMessage={errors.email?.message}
            />
            <InputPassword className={s.inputField}
                           errorMessage={errors.password?.message}
                           register={register('password')}
            />
            <div className={s.checkbox}>
              <Checkbox id='rememberMe' {...register('rememberMe')} />
              <span>Remember me</span>
            </div>
            <NavLink className={s.forgotPasswordLink} to={'/'}>Forgot Password?</NavLink>
            <UniversalButton title={'Sign In'} rounded={true} textColor={'white'} height={'36'} />
          </FormControl>
        </form>
        <p>Don't have an account?</p>
        <NavLink className={s.registrationLink} to={'/registration'}>Sign Up</NavLink>
      </div>
    </div>
  )
}
