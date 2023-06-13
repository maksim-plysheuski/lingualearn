import s from './style.module.scss'
import { FC } from 'react'
import { useAppSelector } from 'common/hooks'
import * as React from 'react'
import { UniversalButton } from 'common/components/universalButton/UniversalButton'
import { CreatePackModal } from 'features/modals/packsModals/createPackModal/CreatePackModal'
import { useModals } from 'common/hooks/useModals'


type Props = {
  pageTitle?: string
  showButton: boolean
  buttonTitle: string
}

export const PageTitleBlock: FC<Props> = ({
                                            pageTitle,
                                            showButton,
                                            buttonTitle
                                          }) => {
  const packOwnerId = useAppSelector(state => state.cards.cards.packUserId)
  const userId = useAppSelector(state => state.profile.profile?._id)
  const { openCreateModal } = useModals()
  const handleOpenModal = () => openCreateModal()

  return (
    <div className={s.addPackBlock}>
      <h2>{pageTitle ? pageTitle
        : packOwnerId === userId ? 'My Pack'
          : 'Friends Pack'}
      </h2>
      {showButton && <UniversalButton title={buttonTitle}
                                      width={'175'}
                                      onClickCallback={handleOpenModal} />}
      <CreatePackModal />
    </div>
  )
}