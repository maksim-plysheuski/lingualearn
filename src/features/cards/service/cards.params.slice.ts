import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TGetCardsArgs } from 'features/cards/cardsApi'


const slice = createSlice({
  name: 'cardsParams',
  initialState: {
    cardsParams: {} as TGetCardsArgs,
  },
  reducers: {
    setCardsParams: (state, action: PayloadAction<TGetCardsArgs>) => {
      state.cardsParams = { ...state.cardsParams, ...action.payload }
    },
    resetCardsParams: (state) => {
      state.cardsParams = {} as TGetCardsArgs
    }
  },
})


export const cardsParamsReducer = slice.reducer
export const { setCardsParams, resetCardsParams } = slice.actions