import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from 'common/utils/createAppAsyncThunk'
import {
  cardsApi,
  TCard,
  TChangeGradeArg, TCommonCardResponse,
  TDeleteArg,
  TGetCardsArgs,
  TGetCardsResponse,
  TUpdateCardArg
} from 'features/cards/cardsApi'
import { thunkTryCatch } from 'common/utils/thunk-try-catch'
import { packsThunks } from 'features/pack/packs.slice'

const slice = createSlice({
  name: 'cards',
  initialState: {
    cards: {} as TGetCardsResponse,
    cardsParams: {} as TGetCardsArgs,
    whose: null as boolean | null
  },
  reducers: {
    setCardsParams: (state, action: PayloadAction<TGetCardsArgs>) => {
      state.cardsParams = { ...state.cardsParams, ...action.payload }
    },
    resetCards: (state) => {
      state.cards = {} as TGetCardsResponse
      state.cardsParams = {} as TGetCardsArgs
      state.whose = null
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.cards = action.payload.cards
        state.whose = action.payload.whose
        state.cardsParams = { ...state.cardsParams, ...action.payload.arg }
      })
      .addCase(packsThunks.updatePack.fulfilled, (state, action) => {
        state.cards.packName = action.payload.updatedCardsPack.name
        state.cards.packDeckCover = action.payload.updatedCardsPack.deckCover
        state.cards.packPrivate = action.payload.updatedCardsPack.private
      })
  }
})

const fetchCards = createAppAsyncThunk<{ cards: TGetCardsResponse, arg: TGetCardsArgs, whose: boolean }, TGetCardsArgs>
('cards/getCards', async (arg, { getState }) => {
  const params = getState().cards.cardsParams
  const _id = getState().auth.profile._id
  const res = await cardsApi.getCards({ ...params, ...arg })
  const whose = res.packUserId === _id
  return { cards: res, arg, whose }
})

const deleteCard = createAppAsyncThunk<{ deletedCard: TCommonCardResponse }, TDeleteArg>
('cards/removeCard', (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    const cardsPack_id = thunkAPI.getState().cards.cardsParams.cardsPack_id
    const res = await cardsApi.deleteCard({ id: arg.id })
    await thunkAPI.dispatch(cardsThunks.fetchCards({ cardsPack_id }))
    return res
  }, false)
})

const updateCard = createAppAsyncThunk<{ updatedCard: TCommonCardResponse }, TUpdateCardArg>
('cards/changeCard', (arg, thunkAPI) => {
  const cardsPack_id = thunkAPI.getState().cards.cardsParams.cardsPack_id
  return thunkTryCatch(thunkAPI, async () => {
    const res = await cardsApi.updateCard(arg)
    await thunkAPI.dispatch(cardsThunks.fetchCards({ cardsPack_id }))
    return res
  }, false)
})

const createCard = createAppAsyncThunk<{ newCard: TCommonCardResponse }, {
  question?: string,
  answer?: string,
  answerImg?: string,
  questionImg?: string
}>
('cards/addCard', (arg, thunkAPI) => {
  const cardsPack_id = thunkAPI.getState().cards.cardsParams.cardsPack_id
  return thunkTryCatch(thunkAPI, async () => {
    const res = await cardsApi.createCard({ cardsPack_id, ...arg })
    await thunkAPI.dispatch(cardsThunks.fetchCards({ cardsPack_id }))
    return res
  }, false)
})

const changeGrade = createAppAsyncThunk<TCard[], TChangeGradeArg & { packId: string }>
('cards/changeGrade', async (arg) => {
  await cardsApi.changeGrade({ grade: arg.grade, card_id: arg.card_id })
  const res = await cardsApi.getCards({ cardsPack_id: arg.packId })
  return res.cards
})


export const cardsReducer = slice.reducer
export const cardsAction = slice.actions
export const cardsThunks = { fetchCards, changeGrade, createCard, updateCard, deleteCard }




