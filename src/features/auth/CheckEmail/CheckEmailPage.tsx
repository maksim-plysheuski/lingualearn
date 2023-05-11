import s from 'features/auth/CheckEmail/CheckEmailPage.module.scss'
import { UniversalButton } from 'common/components/Button/UniversalButton'
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox'

type Props = {
  email?: string
}


export const CheckEmailPage = (props: Props) => {
  return (
    <div className={s.checkEmailPage}>
      <div className={s.checkEmailCard}>
        <h1>Check Email</h1>
        <div className={s.iconContainer}>
          <ForwardToInboxIcon color={'primary'} sx={{ fontSize: '52px' }} />
        </div>
        <span>We’ve sent an Email with instructions to example@mail.com</span>
        <UniversalButton title={'Back to login'}
                         rounded={true}
                         textColor={'white'}
                         height={'36'}
                         width={'347'}
                         margin={'0 0 31px 0'} />
      </div>
    </div>
  )
}