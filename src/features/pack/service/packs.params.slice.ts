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
    resetPackParams: (state) => {
      state.packParams = { max: 0, min: 0, packName: '', sortPacks: '', user_id: '' }
    },
    setIsMyPack: (state, action: PayloadAction<boolean>) => {
      state.isMyPack = action.payload
    }
  }
})

export const packsParamsReducer = slice.reducer
export const { setPackParams, resetPackParams, setIsMyPack } = slice.actions