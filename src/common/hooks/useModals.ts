import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { modalsAction } from 'features/modals/modals.slice'
import { packsThunks } from 'features/pack/packs.slice'
import { toast } from 'react-toastify'
import { InputsType } from 'common/hooks/useFormModals'
import { TPack } from 'features/pack/packApi'
import {
  isCreateModalOpenSelector,
  isDeleteModalOpenSelector,
  isUpdateModalOpenSelector,
  selectedPackIdSelector,
  selectedPackNameSelector
} from 'features/modals/modalsSelector'


export const useModals = () => {
  const dispatch = useAppDispatch()
  const isUpdateModalOpen = useAppSelector(isUpdateModalOpenSelector)
  const isCreateModalOpen = useAppSelector(isCreateModalOpenSelector)
  const isDeleteModalOpen = useAppSelector(isDeleteModalOpenSelector)
  const selectedPackName = useAppSelector(selectedPackNameSelector)
  const selectedPackId = useAppSelector(selectedPackIdSelector)

  const openCreateModal = () => dispatch(modalsAction.showCreateModal())
  const openUpdateModal = (selectedPack: TPack) => dispatch(modalsAction.showUpdateModal(selectedPack))
  const closeModal = () => dispatch(modalsAction.closeModal())

  const createPack = (data: InputsType) => {
    let payload = {
      name: data.packName,
      private: data.privatePack
    }
    dispatch(packsThunks.createPack(payload)).unwrap()
      .then(() => toast.info(`New pack ${payload.name} has been created`))
      .catch((err) => toast.error(err.e.response ? err.e.response.data.error : err.e.message))
    closeModal()
  }

  const updatePack = (data: InputsType) => {
    let payload = {
      _id: selectedPackId,
      name: data.packName
    }
    dispatch(packsThunks.updatePack(payload)).unwrap()
      .then(() => toast.info(`Pack has been updated`))
      .catch((err) => toast.error(err.e.response ? err.e.response.data.error : err.e.message))
    closeModal()
  }

  const deletePack = () => {
    dispatch(packsThunks.deletePack({ id: selectedPackId })).unwrap()
      .then((data) => toast.info(`Pack ${data.pack.deletedCardsPack.name} has been removed`))
      .catch((err) => toast.error(err.e.response ? err.e.response.data.error : err.e.message))
    closeModal()
  }

  return {
    isUpdateModalOpen,
    isCreateModalOpen,
    isDeleteModalOpen,
    selectedPackName,
    openUpdateModal,
    openCreateModal,
    closeModal,
    createPack,
    updatePack,
    deletePack
  }
}