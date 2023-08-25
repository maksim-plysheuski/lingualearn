import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TGetCardsArgs } from 'features/cards/cardsApi'


const slice = createSlice({
  name: 'cardsParams',
  initialState: {
    cardsParams: {} as TGetCardsArgs
  },
  reducers: {
    setCardsParams: (state, action: PayloadAction<TGetCardsArgs>) => {
      state.cardsParams = { ...state.cardsParams, ...action.payload }
    },
    resetCards: (state) => {
     /* state.cards = {} as TGetCardsResponse
      state.cardsParams = {} as TGetCardsArgs
      state.isMyCards = null*/
    }
  },
})


export const cardsParamsReducer = slice.reducer
export const {resetCards, setCardsParams } = slice.actions