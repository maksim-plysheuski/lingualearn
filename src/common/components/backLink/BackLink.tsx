import s from './style.module.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Link } from 'react-router-dom'
import { paths } from 'common/router/path'

export const BackLink = () => {
  return (
    <div className={s.backLinkContainer}>
      <ArrowBackIcon fontSize={'medium'} />
      <Link className={s.backLink} to={paths.PACKS}>Back to Pack List</Link>
    </div>
  )
}