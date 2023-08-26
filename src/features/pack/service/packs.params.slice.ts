import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FetchPacksArgType } from 'features/pack/service/packs.types'


const slice = createSlice({
  name: 'packsParams',
  initialState: {
    packParams: {} as FetchPacksArgType,
    isMyPack: false as boolean
  },
  reducers: {
    setPackParams: (state, action: PayloadAction<FetchPacksArgType>) => {
      state.packParams = { ...state.packParams, ...action.payload }
    },
    setIsMyPack: (state, action: PayloadAction<boolean>) => {
      state.isMyPack = action.payload
    }
  }
})

export const packsParamsReducer = slice.reducer
export const { setPackParams, setIsMyPack } = slice.actions