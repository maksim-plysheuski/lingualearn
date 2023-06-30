import { createSlice } from '@reduxjs/toolkit'
import { ProfileType } from 'features/auth/auth.api'
import { createAppAsyncThunk } from 'common/utils/createAppAsyncThunk'
import { profileApi, TChangeUser } from 'features/profile/profile.api'
import { authThunks } from 'features/auth/auth.slice'
import { thunkTryCatch } from 'common/utils'


const slice = createSlice({
  name: 'profile',
  initialState: {
    profile: null as ProfileType | null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(authThunks.authMe.fulfilled, (state, action) => {
        state.profile = action.payload.profile
      })
  }
})


const changeUserProfile = createAppAsyncThunk<{ name: string, avatar?: string }, TChangeUser>
('profile/changeUser', (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    const res = await profileApi.changeUserProfile(arg)
    return { name: res.name, avatar: res.avatar }
  })


})


export const profileReducer = slice.reducer
export const profileThunks = {  changeUserProfile }



