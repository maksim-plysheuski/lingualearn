import s from './style.module.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Link } from 'react-router-dom'
import { path } from 'common/router/path'

export const BackLink = () => {
  return (
    <div className={s.backLinkContainer}>
      <ArrowBackIcon fontSize={'small'} sx={{ color: 'white' }} />
      <Link className={s.backLink} to={path.PACKS}>Back to Pack List</Link>
    </div>
  )
}