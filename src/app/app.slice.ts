import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {authThunks} from 'features/auth/auth.slice'

const appInitialState = {
  error: null as string | null,
  isLoading: false,
  isAppInitialized: false,
  users: []
}


const slice = createSlice({
  name: 'app',
  initialState: appInitialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.isLoading = action.payload.isLoading
    },
    setAppInitialized: (state) => {
      state.isAppInitialized = true
    }
  },
  extraReducers: builder => {
    builder.addCase(authThunks.authMe.fulfilled, (state) => {
      state.isAppInitialized = true
    })
    builder.addCase(authThunks.authMe.rejected, (state) => {
      state.isAppInitialized = true
    })
  }
})

export const appReducer = slice.reducer
export const appActions = slice.actions
