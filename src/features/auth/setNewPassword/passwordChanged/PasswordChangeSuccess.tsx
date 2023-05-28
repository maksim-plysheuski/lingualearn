import React from 'react'
import s from './style.module.scss'
import { useNavigate } from 'react-router-dom'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { UniversalButton } from 'common/components/button/UniversalButton'
import { paths } from 'common/router/path'


export const PasswordChangeSuccess = () => {
  const navigate = useNavigate()

  return (
    <div className={s.checkEmailPage}>
      <div className={s.container}>
        <span className={s.title}>Password Changed</span>
        <div className={s.iconContainer}>
          <CheckCircleOutlineIcon color={'success'} sx={{ fontSize: '100px' }} />
        </div>
        <span className={s.helperText}>{`Password has been changed!`}
        <p> Please login to your account again</p>
        </span>
        <UniversalButton title={'Login'}
                         onClickCallback={() => navigate(paths.LOGIN)}
                         rounded={true}
                         textColor={'white'}
                         height={'36'}
                         width={'347'}
                         margin={'37px 0 0 0'} />
      </div>
    </div>
  )
}

