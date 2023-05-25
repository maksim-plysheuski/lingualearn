import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from 'common/utils/createAppAsyncThunk'
import { cardsApi, TGetCardsArgs, TGetCardsResponse } from 'features/cards/cardsApi'


const slice = createSlice({
  name: 'cards',
  initialState: {
    cards: {} as TGetCardsResponse,
    cardsParams: {
    } as TGetCardsArgs,
    selectedPackId: '' as string
  },
  reducers: {
    setCardsParams: (state, action: PayloadAction<TGetCardsArgs>) => {
      state.cardsParams = { ...state.cardsParams, ...action.payload }
    },
    setSelectedPackId: (state, action: PayloadAction<string>) => {
      state.selectedPackId = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getCards.fulfilled, (state, action) => {
        state.cards = action.payload.cards
      })
  }
})


const getCards = createAppAsyncThunk<any, TGetCardsArgs>('cards/getCards', async (arg, { getState }) => {
  const params = getState().cards.cardsParams
  const res = await cardsApi.getCards({ ...params, ...arg })
  return {cards: res}

})



export const cardsReducer = slice.reducer
export const cardsAction = slice.actions
export const cardsThunks = { getCards }



