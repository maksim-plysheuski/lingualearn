import { createSlice } from '@reduxjs/toolkit'
import {
  ArgLoginType,
  ArgRegisterType,
  profileApi,
  ProfileType,
  TChangeUser,
  TNewPassword
} from 'features/profile/profile.api'
import { createAppAsyncThunk } from 'common/utils/createAppAsyncThunk'
import { thunkTryCatch } from 'common/utils/thunk-try-catch'


const slice = createSlice({
  name: 'profile',
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

const changeProfile = createAppAsyncThunk<unknown, TChangeUser>
('profile/changeUser', (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    await profileApi.changeUserProfile(arg)
    thunkAPI.dispatch(authMe())
  })
})

const authMe = createAppAsyncThunk<{ profile: ProfileType, isLoggedIn: boolean }>
('profile/me', (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    const res = await profileApi.authMe()
    return { profile: res, isLoggedIn: true }
  })
})

const login = createAppAsyncThunk<{ isLoggedIn: boolean }, ArgLoginType>
('profile/login', (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    await profileApi.login(arg)
    await thunkAPI.dispatch(authMe())
    return { isLoggedIn: true }
  }, false)
})

const logout = createAppAsyncThunk<{ isLoggedIn: boolean }>
('profile/logout', (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    await profileApi.logout()
    return { isLoggedIn: false }
  })
})

const register = createAppAsyncThunk<boolean, ArgRegisterType>
('profile/register', (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    await profileApi.register(arg)
    return true
  })
})

const setNewPassword = createAppAsyncThunk<void, TNewPassword>
('profile/newPassword', (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    await profileApi.setNewPassword({ password: arg.password, resetPasswordToken: arg.resetPasswordToken })
  })
})


export const authReducer = slice.reducer
export const authThunks = { changeProfile, authMe, register, login, logout, setNewPassword }




