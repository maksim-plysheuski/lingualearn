import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { authFulfilled, authPending } from 'features/auth/auth.slice'


const appInitialState = {
  error: null as string | null,
  isLoading: false,
  isAppInitialized: false,
  users: []
}

// type InitialStateType = typeof appInitialState

const slice = createSlice({
  name: 'app',
  initialState: appInitialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.isLoading = action.payload.isLoading
    },
    setAppInitialized: (state) => {
      state.isAppInitialized = false
    }
  },
  extraReducers: builder => {
    builder
      .addMatcher(authPending, (state) => {
        state.isAppInitialized = true
      })
      .addMatcher(authFulfilled, (state) => {
        state.isAppInitialized = false
      })
  }
})

export const appReducer = slice.reducer
export const appActions = slice.actions
