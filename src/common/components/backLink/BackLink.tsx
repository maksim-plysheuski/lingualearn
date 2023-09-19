import s from './style.module.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Link } from 'react-router-dom'
import { routePaths } from 'common/router'
import { useAppDispatch } from 'common/hooks'
import { resetCardsParams } from 'features/cards/service/cards.params.slice'

export const BackLink = () => {
  const dispatch = useAppDispatch()
  const resetParamsHandler = () => dispatch(resetCardsParams())

  return (
    <div className={s.backLinkContainer}>
      <ArrowBackIcon fontSize={'small'} sx={{ color: 'white' }} />
      <Link onClick={resetParamsHandler} className={s.backLink} to={routePaths.PACKS}>Back to Pack List</Link>
    </div>
  )
}