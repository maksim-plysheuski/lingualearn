import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from 'common/utils/createAppAsyncThunk'
import { thunkTryCatch } from 'common/utils/thunk-try-catch'
import {
  ForgotPasswordArgType,
  LoginArgType,
  NewPasswordArgType,
  ProfileType,
  RegisterArgType, UpdateProfileArgType
} from 'features/auth/auth.types'
import { authApi } from 'features/auth/auth.api'


const slice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false as boolean,
    userProfile: {} as ProfileType
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(authMe.fulfilled, (state, action: PayloadAction<{ profile: ProfileType, isLoggedIn: boolean }>) => {
        state.isLoggedIn = action.payload.isLoggedIn
        state.userProfile = action.payload.profile
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<{ isLoggedIn: boolean }>) => {
        state.isLoggedIn = action.payload.isLoggedIn
      })
      .addCase(logout.fulfilled, (state, action: PayloadAction<{ isLoggedIn: boolean }>) => {
        state.isLoggedIn = action.payload.isLoggedIn
      })
      .addCase(updateUserProfile.fulfilled, (state, action: PayloadAction<{ updatedUser: ProfileType }>) => {
        state.userProfile = action.payload.updatedUser
      })
  }
})

const authMe = createAppAsyncThunk<{ profile: ProfileType, isLoggedIn: boolean }>('auth/me', async (arg, thunkAPI) => {
  return await thunkTryCatch(thunkAPI, async () => {
    const res = await authApi.authMe()
    return { profile: res, isLoggedIn: true }
  }, false)
})

const login = createAppAsyncThunk<{ isLoggedIn: boolean }, LoginArgType>
('auth/login', (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    await authApi.login(arg)
    await thunkAPI.dispatch(authMe())
    return { isLoggedIn: true }
  }, false)
})

const logout = createAppAsyncThunk<{ isLoggedIn: boolean }>
('auth/logout', async (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    await authApi.logout()
    return { isLoggedIn: false }
  })
})

const register = createAppAsyncThunk<boolean, RegisterArgType>
('auth/register', (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    await authApi.register(arg)
    return true
  })
})

const restorePassword = createAppAsyncThunk<void, ForgotPasswordArgType>('auth/restorePassword', async (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    await authApi.forgotPassword(arg)
  })
})

const setNewPassword = createAppAsyncThunk<void, NewPasswordArgType>('auth/setNewPassword', async (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    await authApi.setNewPassword({ password: arg.password, resetPasswordToken: arg.resetPasswordToken })
  })
})

const updateUserProfile = createAppAsyncThunk<{ updatedUser: ProfileType }, UpdateProfileArgType>
('profile/changeUser', (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    return await authApi.updateUserProfile(arg)
  })
})


export const authReducer = slice.reducer
export const authThunks = { authMe, register, login, logout, restorePassword, setNewPassword, updateUserProfile }