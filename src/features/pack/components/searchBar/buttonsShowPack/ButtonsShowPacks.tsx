import ToggleButton from '@mui/material/ToggleButton/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup/ToggleButtonGroup'
import { buttonStyle } from 'features/pack/components/searchBar/buttonsShowPack/style'
import s from './style.module.scss'
import { memo } from 'react'
import { useSearchPacks } from 'features/pack/hook/useSearchPacks'
import { useAppSelector } from 'common/hooks'
import { selectIsAppLoading } from 'app'

export const ButtonsShowPacks = memo(() => {
  const { setMyAllCards, paramsCardId, userId } = useSearchPacks()
  const getPackHandler = (user_id: string) => setMyAllCards(user_id)
  const isLoading = useAppSelector(selectIsAppLoading)

  return (
    <div className={s.container}>
      <span>Show packs cards</span>
      <ToggleButtonGroup id={'IdButtonGroup'} exclusive value={!!paramsCardId ? paramsCardId : ''} disabled={isLoading}>
        <ToggleButton value={userId} sx={buttonStyle} onClick={() => getPackHandler(userId)}>
          My
        </ToggleButton>
        <ToggleButton value={''} sx={buttonStyle} onClick={() => getPackHandler('')}>
          All
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
})

