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
    dispatch(packsThunks.createPack(payload))
      .unwrap()
      .then(() => {
        toast.info(`Pack ${payload.name} has been added`)
        closeModal()
      })
      .catch((err) => toast.error(err.e.response ? err.e.response.data.error : err.e.message))
  }

  const updatePack = (data: InputsType) => {
    let payload = {
      _id: selectedPackId,
      name: data.packName,
    }
    dispatch(packsThunks.updatePack(payload)).then(() => closeModal())
  }

  return {
    isUpdateModalOpen,
    isCreateModalOpen,
    openUpdateModal,
    openCreateModal,
    closeModal,
    selectedPackName,
    createPack,
    updatePack
  }
}