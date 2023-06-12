import { RootState } from 'app/store'

const isUpdateModalOpenSelector = (state: RootState) => state.modals.isUpdateModalOpen
const isCreateModalOpenSelector = (state: RootState) => state.modals.isCreateModalOpen
const isDeleteModalOpenSelector = (state: RootState) => state.modals.isDeleteModalOpen
const selectedPackNameSelector = (state: RootState) => state.modals.selectedPack.name
const selectedPackIdSelector = (state: RootState) => state.modals.selectedPack._id

export {
  isUpdateModalOpenSelector,
  isCreateModalOpenSelector,
  isDeleteModalOpenSelector,
  selectedPackIdSelector,
  selectedPackNameSelector
}
