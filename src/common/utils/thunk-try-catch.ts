import { BaseThunkAPI } from '@reduxjs/toolkit/dist/createAsyncThunk'
import { AppDispatch, RootState } from 'app/store'

export const thunkTryCatch = async <T>(
  thunkAPI: BaseThunkAPI<RootState, any, AppDispatch, unknown>,
  logic: () => Promise<T>,
  showGlobalError: boolean = true
): Promise<T | ReturnType<typeof thunkAPI.rejectWithValue>> => {
  try {
    return await logic()
  } catch (e) {
    return thunkAPI.rejectWithValue({ e, showGlobalError })
  }
}

