import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { packApi, TDeletePackArg, TGetPacksArg, TPacksResponse } from 'features/pack/packApi'
import { createAppAsyncThunk } from 'common/utils/createAppAsyncThunk'
import { TGetCardsArgs, TGetCardsResponse } from 'features/cards/cardsApi'


const slice = createSlice({
  name: 'cards',
  initialState: {
    cards: {} as TGetCardsResponse,
    packParams: {} as TGetCardsArgs
  },
  reducers: {
    setCardsParams: (state, action: PayloadAction<TGetCardsArgs>) => {
      state.packParams = { ...state.packParams, ...action.payload }
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
  const params = getState().cards.packParams
  const res = await packApi.getPacks({ ...params, ...arg })
  return { cards: res.data}
})



export const cardsReducer = slice.reducer
export const cardsAction = slice.actions
export const cardsThunks = { getCards }



