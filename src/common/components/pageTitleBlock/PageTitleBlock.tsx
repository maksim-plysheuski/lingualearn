import s from './style.module.scss'
import { FC } from 'react'
import { useAppSelector } from 'common/hooks'
import { PackModal } from 'common/components/modals/addNewPackModal/PackModal'
import { BasicModal } from 'common/components/modals/basicModal/basicModal'
import * as React from 'react'


type Props = {
  pageTitle?: string
  showButton: boolean
  buttonTitle: string
  buttonCallback?: () => void
}

export const PageTitleBlock: FC<Props> = (
  {
    pageTitle,
    showButton,
    buttonTitle,
    buttonCallback
  }) => {
  const packOwnerId = useAppSelector(state => state.cards.cards.packUserId)
  const userId = useAppSelector(state => state.profile.profile?._id)

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <div className={s.addPackBlock}>
      <h2>{pageTitle ? pageTitle
        : packOwnerId === userId ? 'My Pack'
          : 'Friends Pack'}
      </h2>
      {showButton &&
        <BasicModal isModalOpen={openModal}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                    children={<PackModal title={'Add new pack'} handleCloseModal={handleClose}/>} />
        }
    </div>
  )
}