import { SubmitHandler, useForm } from 'react-hook-form'
import { Checkbox, FormControl } from '@mui/material'
import s from './styles.module.scss'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { InputEmail, InputPassword, SuperButton } from 'common/components'
import { loginSchema } from 'features/auth/login/loginSchema'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { paths } from 'common/router'
import { toast } from 'react-toastify'
import { selectIsAppLoading } from 'app'
import { authThunks } from '../auth.slice'


type InputsType = yup.InferType<typeof loginSchema>

export const Login = () => {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(selectIsAppLoading)

  const { register, handleSubmit, formState: { errors }, getFieldState } = useForm<InputsType>({
    mode: 'onTouched',
    resolver: yupResolver(loginSchema)
  })

  const onSubmit: SubmitHandler<InputsType> = (data: InputsType) => {
    dispatch(authThunks.login(data))
      .unwrap()
      .then(() => toast.success('You have successfully logged in'))
      .catch((err) => toast.error(err.e.response ? err.e.response.data.error : err.e.message))
  }

  const isButtonDisabled = getFieldState('password').invalid || getFieldState('email').invalid

  return (
    <div className={s.loginPage}>
      <div className={s.formContainer}>
        <h1 className={s.title}>Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl className={s.form}>
            <InputEmail register={register('email')} errorMessage={errors.email?.message} />
            <InputPassword errorMessage={errors.password?.message} register={register('password')} />
            <div className={s.checkbox}>
              <Checkbox sx={{ color: '#4C4C4C' }}{...register('rememberMe')} />
              <span>Remember me</span>
            </div>
            <Link className={s.forgotPasswordLink} to={paths.FORGOT_PASSWORD}>Forgot Password?</Link>
            <SuperButton title={'Sign In'}
                         disabled={isButtonDisabled}
                         isLoading={isLoading}
                         marginTop={'60px'} />
          </FormControl>
        </form>
        <span className={s.dontHaveAccount}>Don't have an account?</span>
        <Link className={s.registrationLink} to={paths.REGISTER}>Sign Up</Link>
      </div>
    </div>
  )
}
