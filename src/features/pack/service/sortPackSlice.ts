import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FetchPackT } from 'features/pack/service/type'

export const slice = createSlice({
  name: 'sortPackSlice',
  initialState: {
    packParams: {} as FetchPackT
  },
  reducers: {
    setPackParams: (state, action: PayloadAction<FetchPackT>) => {
      state.packParams = { ...state.packParams, ...action.payload }
    }
  }
})

export const sortPackSlice = slice.reducer
export const { setPackParams } = slice.actions