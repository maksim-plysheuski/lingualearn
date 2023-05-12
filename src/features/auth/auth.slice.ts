import { createSlice } from '@reduxjs/toolkit'
import { ArgLoginType, ArgRegisterType, authApi, ProfileType, TNewPassword } from 'features/auth/auth.api'
import { createAppAsyncThunk } from 'common/utils/createAppAsyncThunk'

const authMe = createAppAsyncThunk<{ profile: ProfileType, isLoggedIn: boolean }>('auth/me', async () => {
  const res = await authApi.authMe()
  return { profile: res, isLoggedIn: true }
})

const login = createAppAsyncThunk<{ isLoggedIn: boolean }, ArgLoginType>
('auth/login', async (arg, thunkAPI) => {
  await authApi.login(arg)
  await thunkAPI.dispatch(authMe())
  return { isLoggedIn: true }
})

const logout = createAppAsyncThunk<{ isLoggedIn: boolean }>
('auth/logout', async () => {
  await authApi.logout()
  return { isLoggedIn: false }
})

const register = createAppAsyncThunk<boolean, ArgRegisterType>
('auth/register', async (arg, { rejectWithValue }) => {
  try {
    await authApi.register(arg)
    return true
  } catch (e) {
    return rejectWithValue(null)
  }
})

const newPassword = createAppAsyncThunk<void, TNewPassword>('auth/newPassword', async (arg, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
    await authApi.newPassword({ password: arg.password, resetPasswordToken: arg.resetPasswordToken })
  } catch (e) {
    return rejectWithValue(null)
  }
})

const slice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false as boolean
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(authMe.fulfilled, (state, action) => {
        state.isLoggedIn = action.payload.isLoggedIn
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = action.payload.isLoggedIn
      })

  }
})


export const authReducer = slice.reducer
export const authThunks = { authMe, register, login, logout,newPassword }



