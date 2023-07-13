import s from 'features/auth/checkEmail/style.module.scss'
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox'
import { useNavigate } from 'react-router-dom'
import { paths } from 'common/router'
import { SuperButton } from 'common/components'

type Props = {
  email?: string
}


export const CheckEmailPage = (props: Props) => {
  const navigate = useNavigate()

  return (
    <div className={s.checkEmailPage}>
      <div className={s.container}>
        <h1>Check Email</h1>
        <div className={s.iconContainer}>
          <ForwardToInboxIcon color={'secondary'} sx={{ fontSize: '45px' }} />
        </div>
        <span>{`We’ve sent an Email with instructions to ${props.email}`}</span>
        <SuperButton title={'Back to login'}
                     onClick={() => navigate(paths.LOGIN)}
                     width={'347'}
                     marginTop={'70px'}
        />
      </div>
    </div>
  )
}