import s from './style.module.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Link } from 'react-router-dom'
import { path } from 'common/router/path'
import { useAppDispatch } from 'common/hooks'

export const BackLink = () => {

  const dispatch = useAppDispatch()
  const resetCardParamsHandler = () => {

  }

  return (
    <div className={s.backLinkContainer}>
      <ArrowBackIcon fontSize={'medium'} sx={{color: 'white'}} />
      <Link onClick={resetCardParamsHandler} className={s.backLink} to={path.PACKS}>Back to Pack List</Link>
    </div>
  )
}