import s from './style.module.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Link } from 'react-router-dom'
import { paths } from 'common/router/path'
import { useAppDispatch } from 'common/hooks'
import { cardsAction } from 'features/cards/cards.slice'

export const BackLink = () => {

  const dispatch = useAppDispatch()
  const resetCardParamsHandler = () => {
    dispatch(cardsAction.resetCards())
  }

  return (
    <div className={s.backLinkContainer}>
      <ArrowBackIcon fontSize={'medium'} />
      <Link onClick={resetCardParamsHandler} className={s.backLink} to={paths.PACKS}>Back to Pack List</Link>
    </div>
  )
}