import { createSlice } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from 'common/utils/createAppAsyncThunk'
import { profileApi, TProfile, TUpdateUserArg } from 'features/profile/profile.api'
import { thunkTryCatch } from 'common/utils'
import { authThunks } from 'features/auth'


const slice = createSlice({
  name: 'profile',
  initialState: {
    profile: null as TProfile | null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(authThunks.authMe.fulfilled, (state, action) => {
        state.profile = action.payload.profile
      })
      .addCase(profileThunks.changeUserProfile.fulfilled, (state, action) => {
        state.profile = action.payload.updatedUser
      })
  }
})

const changeUserProfile = createAppAsyncThunk<{ updatedUser: TProfile }, TUpdateUserArg>
('profile/changeUser', (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    return await profileApi.updateUserProfile(arg)
  })
})


export const profileReducer = slice.reducer
export const profileThunks = { changeUserProfile }



