import { createSlice } from '@reduxjs/toolkit'
import { ProfileType } from 'features/auth/auth.api'
import { createAppAsyncThunk } from 'common/utils/createAppAsyncThunk'
import { profileApi, TChangeUser } from 'features/Profile/profile.api'
import { authThunks } from 'features/auth/auth.slice'

const changeUserData = createAppAsyncThunk<{ profile: ProfileType }, TChangeUser>
('profile/changeUser', async (arg) => {
  const res = await profileApi.changeUserData(arg)
  return { profile: res.updatedUser }
})


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


export const profileReducer = slice.reducer
export const profileThunks = { changeUserData }



