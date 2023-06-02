import s from 'features/auth/checkEmail/style.module.scss'
import { UniversalButton } from 'common/components/universalButton/UniversalButton'
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox'
import { useNavigate } from 'react-router-dom'
import { paths } from 'common/router/path'

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
          <ForwardToInboxIcon color={'primary'} sx={{ fontSize: '52px' }} />
        </div>
        <span>{`We’ve sent an Email with instructions to ${props.email}`}</span>
        <UniversalButton title={'Back to login'}
                         onClickCallback={() => navigate(paths.LOGIN)}
                         width={'347'}
                         marginTop={'40px'} />
      </div>
    </div>
  )
}