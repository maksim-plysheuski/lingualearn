import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FetchCardType } from 'features/cards/service/type'

export const paramsCardSlice = createSlice({
  name: 'ParamsCardSlice',
  initialState: {} as FetchCardType,
  reducers: {
    setCardParams: (state, action: PayloadAction<FetchCardType>) => {
      if (action.payload){
        return { ...state, ...action.payload }
      }

    }
  }
})

export const { setCardParams } = paramsCardSlice.actions
export const paramsCardReducer = paramsCardSlice.reducer