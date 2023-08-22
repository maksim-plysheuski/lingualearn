import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FetchPacksArgType } from 'features/pack/service/packsTypes'


const slice = createSlice({
  name: 'packsParams',
  initialState: {
    packParams: {} as FetchPacksArgType
  },
  reducers: {
    setPackParams: (state, action: PayloadAction<FetchPacksArgType>) => {
      state.packParams = { ...state.packParams, ...action.payload }
    }
  }
})

export const packsParamsReducer = slice.reducer
export const setPackParams = slice.actions.setPackParams