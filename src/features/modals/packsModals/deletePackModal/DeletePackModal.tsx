import s from './style.module.scss'
import { AppModal } from 'features/modals/appModal/appModal/AppModal'
import * as React from 'react'
import { useModals } from 'common/hooks/useModals'
import { UniversalButton } from 'common/components/universalButton/UniversalButton'


export const DeletePackModal = () => {
  const { isDeleteModalOpen, selectedPackName, closeModal, deletePack } = useModals()

  return (
    <AppModal title={'Delete Pack'}
              isOpen={isDeleteModalOpen}
              handleClose={closeModal}
    >
      <div className={s.deleteModal}>
        <span>Do you really want to remove <b>{selectedPackName}</b>?</span>
        <p>All cards will be deleted</p>
        <div className={s.buttons}>
          <UniversalButton title={'Cancel'} onClickCallback={closeModal} textColor={'black'} width={'127'} />
          <UniversalButton title={'Delete'} onClickCallback={deletePack} buttonStyle={'error'} width={'127'} />
        </div>
      </div>
    </AppModal>
  )
}