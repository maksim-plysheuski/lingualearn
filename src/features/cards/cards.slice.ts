import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAppAsyncThunk } from 'common/utils/createAppAsyncThunk'
import {
  cardsApi, TCard,
  TChangeGradeArg,
  TGetCardsArgs,
  TGetCardsResponse,
} from 'features/cards/cardsApi'

const slice = createSlice({
  name: 'cards',
  initialState: {
    cards: {} as TGetCardsResponse,
    cardsParams: {} as TGetCardsArgs,
    isMyCards: null as boolean | null
  },
  reducers: {
   /* setCardsParams: (state, action: PayloadAction<TGetCardsArgs>) => {
      state.cardsParams = { ...state.cardsParams, ...action.payload }
    },*/
    /*resetCards: (state) => {
      state.cards = {} as TGetCardsResponse
      state.cardsParams = {} as TGetCardsArgs
      state.isMyCards = null
    }*/
  },
  extraReducers: builder => {

      /*.addCase(fetchCards.fulfilled, (state, action) => {
        state.cards = action.payload.cards
        state.isMyCards = action.payload.isMyCards
        state.cardsParams = { ...state.cardsParams, ...action.payload.arg }
      })*/
      /*.addCase(packsThunks.updatePack.fulfilled, (state, action) => {
        state.cards.packName = action.payload.updatedCardsPack.name
        state.cards.packDeckCover = action.payload.updatedCardsPack.deckCover
        state.cards.packPrivate = action.payload.updatedCardsPack.private
      })*/
  }
})

/*const fetchCards = createAppAsyncThunk<{ cards: TGetCardsResponse, arg: TGetCardsArgs, isMyCards: boolean }, TGetCardsArgs>
('cards/getCards', async (arg, { getState }) => {
  const params = getState().cards.cardsParams
  const _id = getState().profile.userProfileData._id
  const res = await cardsApi.getCards({ ...params, ...arg })
  const isMyCards = res.packUserId === _id
  return { cards: res, arg, isMyCards }
})*/

/*const deleteCard = createAppAsyncThunk<{ deletedCard: TCard }, TDeleteCardArg>
('cards/removeCard', (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    const cardsPack_id = thunkAPI.getState().cards.cardsParams.cardsPack_id
    const res = await cardsApi.deleteCard({ id: arg.id })
    return res
  }, false)
})

const updateCard = createAppAsyncThunk<{ updatedCard: TCard }, TUpdateCardArg>
('cards/changeCard', (arg, thunkAPI) => {
  const cardsPack_id = thunkAPI.getState().cards.cardsParams.cardsPack_id
  return thunkTryCatch(thunkAPI, async () => {
    const res = await cardsApi.updateCard(arg)

    return res
  }, false)
})

const createCard = createAppAsyncThunk<{ newCard: TCard }, {
  question?: string,
  answer?: string,
  answerImg?: string,
  questionImg?: string
}>
('cards/addCard', (arg, thunkAPI) => {
  const cardsPack_id = thunkAPI.getState().cards.cardsParams.cardsPack_id
  return thunkTryCatch(thunkAPI, async () => {
    const res = await cardsApi.createCard({ cardsPack_id, ...arg })
    return res
  }, false)
})*/

/*const changeGrade = createAppAsyncThunk<TCard[], TChangeGradeArg & { packId: string }>
('cards/changeGrade', async (arg) => {
  await cardsApi.changeGrade({ grade: arg.grade, card_id: arg.card_id })
  const res = await cardsApi.getCards({ cardsPack_id: arg.packId })
  return res.cards
})*/

export const cardsReducer = slice.reducer





