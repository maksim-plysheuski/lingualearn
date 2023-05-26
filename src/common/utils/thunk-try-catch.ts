import { BaseThunkAPI } from '@reduxjs/toolkit/dist/createAsyncThunk'
import { AppDispatch, RootState } from 'app/store'

export const thunkTryCatch = async (thunkAPI: BaseThunkAPI<RootState, any, AppDispatch, any>, logic: Function) => {
  try {
    return await logic()
  } catch (e) {
    return thunkAPI.rejectWithValue(e)
  }
}

