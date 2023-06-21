import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from 'common/utils/createAppAsyncThunk'
import {
  cardsApi,
  TChangeGradeArg,
  TChangeGradeResponse, TCreateResponse,
  TGetCardsArgs,
  TGetCardsResponse, TUpdateArg
} from 'features/cards/cardsApi'
import { thunkTryCatch } from 'common/utils/thunk-try-catch'

const slice = createSlice({
  name: 'cards',
  initialState: {
    cards: {} as TGetCardsResponse,
    cardsParams: {} as TGetCardsArgs
  },
  reducers: {
    setCardsParams: (state, action: PayloadAction<TGetCardsArgs>) => {
      state.cardsParams = { ...state.cardsParams, ...action.payload }
    },
    resetCards: (state) => {
      state.cards = {} as TGetCardsResponse
      state.cardsParams = {} as TGetCardsArgs
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.cards = action.payload.cards
        state.cardsParams = { ...state.cardsParams, ...action.payload.arg }
      })
  }
})

const changeCard = createAppAsyncThunk<any, TUpdateArg>
('cards/changeCard', (arg, thunkAPI) => {
  const cardsPack_id = thunkAPI.getState().cards.cardsParams.cardsPack_id
  return thunkTryCatch(thunkAPI, async () => {
      await cardsApi.updateCard(arg)
      thunkAPI.dispatch(cardsThunks.fetchCards({ cardsPack_id }))
    }
  )
})

const fetchCards = createAppAsyncThunk<{ cards: TGetCardsResponse, arg: TGetCardsArgs }, TGetCardsArgs>
('cards/getCards', async (arg, { getState }) => {
  const params = getState().cards.cardsParams
  const res = await cardsApi.getCards({ ...params, ...arg })
  return { cards: res, arg }
})

const createCard = createAppAsyncThunk<TCreateResponse, { question: string, answer: string, }>
('cards/addCard', (arg, thunkAPI) => {
    const cardsPack_id = thunkAPI.getState().cards.cardsParams.cardsPack_id
    return thunkTryCatch(thunkAPI, async () => {
      const res = await cardsApi.createCard({ cardsPack_id, ...arg })
      thunkAPI.dispatch(cardsThunks.fetchCards({ cardsPack_id }))
      return res
    })
  }
)


const changeGrade = createAppAsyncThunk<{ updatedCard: TChangeGradeResponse }, TChangeGradeArg>
('cards/changeGrade', async (arg) => {
  const res = await cardsApi.changeGrade(arg)
  return { updatedCard: res }
})


export const cardsReducer = slice.reducer
export const cardsAction = slice.actions
export const cardsThunks = { fetchCards, changeGrade, createCard, changeCard }




