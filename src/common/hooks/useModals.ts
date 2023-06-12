import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { modalsAction } from 'features/modals/modals.slice'
import { packsThunks } from 'features/pack/packs.slice'
import { toast } from 'react-toastify'
import { InputsType } from 'common/hooks/useFormModals'


export const useModals = () => {
  const dispatch = useAppDispatch()
  const isUpdateModalOpen = useAppSelector(state => state.modals.isUpdateModalOpen)
  const isCreateModalOpen = useAppSelector(state => state.modals.isCreateModalOpen)
  const isDeleteModalOpen = useAppSelector(state => state.modals.isDeleteModalOpen)
  const selectedPackName = useAppSelector(state => state.modals.selectedPack.name)
  const selectedPackId = useAppSelector(selectedPackName => selectedPackName.modals.selectedPack._id)

  const openCreateModal = () => dispatch(modalsAction.showCreateModal())
  const openUpdateModal = () => dispatch(modalsAction.showUpdateModal())
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
      .then((data) => toast.info(`Pack ${data.pack.deletedCardsPack.name} has been updated`))
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