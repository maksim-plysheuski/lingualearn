import { useForm, SubmitHandler } from 'react-hook-form'
import { Checkbox, FormControl } from '@mui/material'
import s from 'features/profile/components/auth/login/styles.module.scss'
import { Link } from 'react-router-dom'
import { authThunks } from 'features/profile/profile.slice'
import { yupResolver } from '@hookform/resolvers/yup'
import { SuperButton } from 'common/components/superButton/SuperButton'
import * as yup from 'yup'
import { InputEmail, InputPassword } from 'common/components'
import { loginSchema } from 'features/profile/components/auth/login/loginSchema'
import { useAppDispatch } from 'common/hooks'
import { path } from 'common/router/path'
import { toast } from 'react-toastify'


type InputsType = yup.InferType<typeof loginSchema>

export const Login = () => {
  const dispatch = useAppDispatch()

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
            <Link className={s.forgotPasswordLink} to={path.FORGOT_PASSWORD}>Forgot Password?</Link>
            <SuperButton title={'Sign In'} disabled={isButtonDisabled} marginTop={'60px'} />
          </FormControl>
        </form>
        <span className={s.dontHaveAccount}>Don't have an account?</span>
        <Link className={s.registrationLink} to={path.REGISTER}>Sign Up</Link>
      </div>
    </div>
  )
}
