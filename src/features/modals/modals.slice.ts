import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TPack } from 'features/pack/packApi'

const initialState: ModalsInitialStateType = {
  isCreateModalOpen: false,
  isUpdateModalOpen: false,
  isDeleteModalOpen: false,
  selectedPack: {} as TPack
}

const slice = createSlice({
  name: 'modals',
  initialState: initialState,
  reducers: {
    setSelectedPack: (state, action: PayloadAction<TPack>) => {
      state.selectedPack = action.payload
    },
    showCreateModal: (state) => {
      state.isCreateModalOpen = true
    },
    showUpdateModal: (state) => {
      state.isUpdateModalOpen = true
    },
    showRemoveModal: (state) => {
      state.isDeleteModalOpen = true
    },
    closeModal: () => initialState
  }
})

export const modalsReducer = slice.reducer
export const modalsAction = slice.actions

//types
export type ModalsInitialStateType = {
  isCreateModalOpen: boolean
  isUpdateModalOpen: boolean
  isDeleteModalOpen: boolean
  selectedPack: TPack
}
