import s from './style.module.scss'
import * as React from 'react'
import { useAppSelector } from 'common/hooks'
import { AddPackModal } from 'features/pack/components/modal/addPackModal/addPackModal'
import { selectPackUserId } from 'features/cards/selectors'
import { profileIdSelect } from 'features/auth/selectors'


export const PageTitleBlock = () => {
  const packOwnerId = useAppSelector(selectPackUserId)
  const userId = useAppSelector(profileIdSelect)

  return (
    <div className={s.addPackBlock}>
      <h2>
        {packOwnerId === userId ? 'My Pack' : 'Friends Pack'}
      </h2>
      <AddPackModal />
    </div>
  )
}