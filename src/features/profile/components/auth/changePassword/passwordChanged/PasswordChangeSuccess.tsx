import React from 'react'
import s from 'features/profile/components/auth/changePassword/passwordChanged/style.module.scss'
import { useNavigate } from 'react-router-dom'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { SuperButton } from 'common/components/superButton/SuperButton'
import { path } from 'common/router/path'


export const PasswordChangeSuccess = () => {
  const navigate = useNavigate()

  return (
    <div className={s.checkEmailPage}>
      <div className={s.container}>
        <h1>Password Changed</h1>
        <div className={s.iconContainer}>
          <CheckCircleOutlineIcon color={'success'} sx={{ fontSize: '100px' }} />
        </div>
        <span className={s.helperText}>
          {`Password has been changed!`}
          <p> Please login to your account again</p>
        </span>
        <SuperButton title={'Login'} onClick={() => navigate(path.LOGIN)} marginTop={'55px'} />
      </div>
    </div>
  )
}

