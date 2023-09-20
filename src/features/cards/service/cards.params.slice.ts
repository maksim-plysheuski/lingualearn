import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ArgFetchCardsType } from 'features/cards/service/cards.api.types'


const slice = createSlice({
  name: 'cardsParams',
  initialState: {
    cardsParams: {} as ArgFetchCardsType,
  },
  reducers: {
    setCardsParams: (state, action: PayloadAction<ArgFetchCardsType>) => {
      state.cardsParams = { ...state.cardsParams, ...action.payload }
    },
    resetCardsParams: (state) => {
      state.cardsParams = {} as ArgFetchCardsType
    }
  },
})


export const cardsParamsReducer = slice.reducer
export const { setCardsParams, resetCardsParams } = slice.actions