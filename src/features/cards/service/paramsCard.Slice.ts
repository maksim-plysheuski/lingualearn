import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FetchCardType, ParamsCardType } from 'features/cards/service/type'

export const paramsCardSlice = createSlice({
  name: 'ParamsCardSlice',
  initialState: {} as FetchCardType,
  reducers: {
    setCardParams: (state, action: PayloadAction<ParamsCardType>) => {
      if (action.payload){
        return { ...state, ...action.payload }
      }

    }
  }
})

export const { setCardParams } = paramsCardSlice.actions
export const paramsCardReducer = paramsCardSlice.reducer