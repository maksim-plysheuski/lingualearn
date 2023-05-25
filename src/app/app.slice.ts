import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { authThunks } from 'features/auth/auth.slice'


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
    setError: (state, action: PayloadAction<{ error: string | null }>) => {
      debugger
      state.error = action.payload.error

    }
  },
  extraReducers: builder => {
    builder
      .addCase(authThunks.authMe.fulfilled, (state) => {
        state.isAppInitialized = true
      })
      .addCase(authThunks.authMe.rejected, (state) => {
        state.isAppInitialized = true
      })
      .addMatcher((action) => {
          return action.type.endsWith('/pending')
        },
        (state) => {
          state.isLoading = true
        })
      .addMatcher((action) => {
          return action.type.endsWith('/fulfilled')
        },
        (state) => {
          state.isLoading = false
        })
      .addMatcher((action) => {
          return action.type.endsWith('/rejected')
        },
        (state, action) => {
          state.error = action.payload.response ? action.payload.response.data.error : action.message
          state.isLoading = false
        })
  }
})

export const appReducer = slice.reducer
export const appActions = slice.actions
