import { createSlice } from '@reduxjs/toolkit'
import { TLoginArg, TRegisterArg, authApi, TForgotArg, TNewPasswordArg } from 'features/auth/auth.api'
import { createAppAsyncThunk } from 'common/utils/createAppAsyncThunk'
import { thunkTryCatch } from 'common/utils/thunk-try-catch'
import { TProfile } from 'features/profile/profile.api'


const slice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false as boolean,
    profile: {} as TProfile
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(authMe.fulfilled, (state, action) => {
        state.isLoggedIn = action.payload.isLoggedIn
        state.profile = action.payload.profile
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = action.payload.isLoggedIn
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoggedIn = action.payload.isLoggedIn
      })
  }
})

const authMe = createAppAsyncThunk<{ profile: TProfile, isLoggedIn: boolean }>('auth/me', async (arg, thunkAPI) => {
  return await thunkTryCatch(thunkAPI, async () => {
    const res = await authApi.authMe()
    return { profile: res, isLoggedIn: true }
  }, false)
})

const login = createAppAsyncThunk<{ isLoggedIn: boolean }, TLoginArg>
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

const register = createAppAsyncThunk<boolean, TRegisterArg>
('auth/register', (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    await authApi.register(arg)
    return true
  })
})

const restorePassword = createAppAsyncThunk<void, TForgotArg>('auth/restorePassword', async (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    await authApi.forgotPassword(arg)
  })
})

const setNewPassword = createAppAsyncThunk<void, TNewPasswordArg>('auth/setNewPassword', async (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    await authApi.setNewPassword({ password: arg.password, resetPasswordToken: arg.resetPasswordToken })
  })
})


export const authReducer = slice.reducer
export const authThunks = { authMe, register, login, logout, restorePassword, setNewPassword }




