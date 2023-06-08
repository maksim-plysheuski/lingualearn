import { useForm, SubmitHandler } from 'react-hook-form'
import { Checkbox, FormControl } from '@mui/material'
import s from 'features/auth/login/styles.module.scss'
import { Link } from 'react-router-dom'
import { authThunks } from 'features/auth/auth.slice'
import { yupResolver } from '@hookform/resolvers/yup'
import { UniversalButton } from 'common/components/universalButton/UniversalButton'
import * as yup from 'yup'
import { InputEmail, InputPassword } from 'common/components'
import { loginSchema } from 'features/auth/login/loginSchema'
import { useAppDispatch } from 'common/hooks'
import { paths } from 'common/router/path'
import { toast } from 'react-toastify'


type InputsType = yup.InferType<typeof loginSchema>

export const Login = () => {
  const dispatch = useAppDispatch()

  const { register, handleSubmit, formState: { errors }, getFieldState } = useForm<InputsType>({
    mode: 'onBlur',
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
            <InputEmail className={s.inputEmail}
                        register={register('email')}
                        errorMessage={errors.email?.message}
            />
            <InputPassword className={s.inputPassword}
                           errorMessage={errors.password?.message}
                           register={register('password')}
            />
            <div className={s.checkbox}>
              <Checkbox id='rememberMe' {...register('rememberMe')} />
              <span>Remember me</span>
            </div>
            <Link className={s.forgotPasswordLink} to={paths.FORGOT_PASSWORD}>Forgot Password?</Link>
            <UniversalButton title={'Sign In'} disabled={isButtonDisabled} marginTop={'45px'} />
          </FormControl>
        </form>
        <span className={s.dontHaveAccount}>Don't have an account?</span>
        <Link className={s.registrationLink} to={paths.REGISTER}>Sign Up</Link>
      </div>
    </div>
  )
}
