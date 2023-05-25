import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from 'common/utils/createAppAsyncThunk'
import { cardsApi, TGetCardsArgs, TGetCardsResponse } from 'features/cards/cardsApi'


const slice = createSlice({
  name: 'cards',
  initialState: {
    cards: {} as TGetCardsResponse,
    cardsParams: {} as TGetCardsArgs
  },
  reducers: {
    setCardsParams: (state, action: PayloadAction<TGetCardsArgs>) => {
      state.cardsParams = { ...state.cardsParams, ...action.payload }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getCards.fulfilled, (state, action) => {
        state.cards = action.payload.cards
      })
  }
})


const getCards = createAppAsyncThunk<{ cards: TGetCardsResponse }>('cards/getCards', async (arg, { getState }) => {
  const params = { ...getState().cards.cardsParams }
  const res = await cardsApi.getCards(params)
  return { cards: res }
})


export const cardsReducer = slice.reducer
export const cardsAction = slice.actions
export const cardsThunks = { getCards }



