import { createSlice } from '@reduxjs/toolkit'
import { ArgLoginType, ArgRegisterType, authApi, ProfileType } from 'features/auth/auth.api'
import { createAppAsyncThunk } from 'common/utils/createAppAsyncThunk'


const slice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false as boolean
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(authMe.fulfilled, (state, action) => {
        state.isLoggedIn = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true
      })

  }
})

const authMe = createAppAsyncThunk<{ profile: ProfileType }, void>('auth/me', async () => {
  const res = await authApi.authMe()
  return { profile: res }
})

const login = createAppAsyncThunk<void, ArgLoginType>
('auth/login', async (arg, thunkAPI) => {
  await authApi.login(arg)
  await thunkAPI.dispatch(authMe)
})

const logout = createAppAsyncThunk<{ isLoggedIn: boolean }, void>
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


export const authReducer = slice.reducer
export const authThunks = { authMe, register, login, logout }



