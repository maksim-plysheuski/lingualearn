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
    showCreateModal: (state) => {
      state.isCreateModalOpen = true
    },
    showUpdateModal: (state, action: PayloadAction<TPack>) => {
      state.selectedPack = action.payload
      state.isUpdateModalOpen = true
    },
    showDeleteModal: (state, action: PayloadAction<TPack>) => {
      state.selectedPack = action.payload
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
