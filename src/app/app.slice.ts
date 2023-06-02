import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { authThunks } from 'features/auth/auth.slice'
import { AxiosError, isAxiosError } from 'axios'


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
          const err = action.payload as Error | AxiosError<{ error: string }>
          if (isAxiosError(err)) {
            state.error = err.response ? err.response.data.error : err.message
          } else {
            state.error = `Native error ${err.message}`
          }
          state.isLoading = false
        })
  }
})

export const appReducer = slice.reducer
export const appActions = slice.actions
