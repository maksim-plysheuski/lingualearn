import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ArgFetchPacksType } from 'features/pack/service/packs.types'


const slice = createSlice({
  name: 'packsParams',
  initialState: {
    packParams: {} as ArgFetchPacksType,
    isMyPack: false as boolean
  },
  reducers: {
    setPackParams: (state, action: PayloadAction<ArgFetchPacksType>) => {
      state.packParams = { ...state.packParams, ...action.payload }
    },
    resetPackParams: (state) => {
      state.packParams = {}
    },
    setIsMyPack: (state, action: PayloadAction<boolean>) => {
      state.isMyPack = action.payload
    }
  }
})

export const packsParamsReducer = slice.reducer
export const { setPackParams, resetPackParams, setIsMyPack } = slice.actions