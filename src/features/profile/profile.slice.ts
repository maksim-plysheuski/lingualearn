import { createSlice } from '@reduxjs/toolkit'
import { ProfileType } from 'features/auth/auth.api'
import { createAppAsyncThunk } from 'common/utils/createAppAsyncThunk'
import { profileApi, TChangeUser } from 'features/profile/profile.api'
import { authThunks } from 'features/auth/auth.slice'


const slice = createSlice({
  name: 'profile',
  initialState: {
    profile: null as ProfileType | null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(changeUserData.fulfilled, (state, action) => {
        state.profile = action.payload.profile
      })
      .addCase(authThunks.authMe.fulfilled, (state, action) => {
        state.profile = action.payload.profile
      })
  }
})


const changeUserData = createAppAsyncThunk<{ profile: ProfileType }, TChangeUser>
('profile/changeUser', async (arg) => {
  const res = await profileApi.changeUserProfile(arg)
  return { profile: res }
})


export const profileReducer = slice.reducer
export const profileThunks = { changeUserData }



