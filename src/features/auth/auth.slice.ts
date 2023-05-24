import { createSlice, isFulfilled, isPending } from '@reduxjs/toolkit'
import { ArgLoginType, ArgRegisterType, authApi, ProfileType, TNewPassword } from 'features/auth/auth.api'
import { createAppAsyncThunk } from 'common/utils/createAppAsyncThunk'
import { packAction } from 'features/pack/packs.slice'
import { cardsAction } from 'features/cards/cards.slice'


const slice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false as boolean,
    profile: {} as ProfileType
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

const authMe = createAppAsyncThunk<{ profile: ProfileType, isLoggedIn: boolean }>('auth/me', async (arg, thunkAPI) => {
  try {
    const res = await authApi.authMe()
    thunkAPI.dispatch(packAction.setPackParams({ user_id: res._id }))
    return { profile: res, isLoggedIn: true }
  } catch (e) {
    return thunkAPI.rejectWithValue(e)
  }
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


export const authReducer = slice.reducer
export const authThunks = { authMe, register, login, logout, newPassword }

export const authPending = isPending(authThunks.authMe)
export const authFulfilled = isFulfilled(authThunks.authMe)




