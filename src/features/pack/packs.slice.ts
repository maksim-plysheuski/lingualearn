import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { packApi, TDeletePackArg, TGetPacksArg, TPacksResponse } from 'features/pack/packApi'
import { createAppAsyncThunk } from 'common/utils/createAppAsyncThunk'


const slice = createSlice({
  name: 'packs',
  initialState: {
    packs: {} as TPacksResponse,
    packParams: {} as TGetPacksArg
  },
  reducers: {
    setPackParams: (state, action: PayloadAction<TGetPacksArg>) => {
      state.packParams = { ...state.packParams, ...action.payload }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getPacks.fulfilled, (state, action) => {
        state.packs = action.payload.packs
        if (action.payload.arg.user_id || action.payload.arg.user_id === '') {
          state.packParams = {
            ...state.packParams,
            packName: '',
            min: action.payload.packs.minCardsCount,
            max: action.payload.packs.maxCardsCount
          }
        }
        if (!Object.keys(state.packParams).length) {
          state.packParams = {
            user_id: '',
            packName: '',
            min: action.payload.packs.minCardsCount,
            max: action.payload.packs.maxCardsCount
          }
        }
      })
  }
})


const getPacks = createAppAsyncThunk<{ packs: TPacksResponse, arg: TGetPacksArg }, TGetPacksArg>
('packs/getPacks', async (arg, { getState }) => {

  const params = getState().packs.packParams
  const res = await packApi.getPacks({ ...params, ...arg })
  return { packs: res.data, arg }
})

const deletePack = createAppAsyncThunk<void, TDeletePackArg>
('packs/deletePack', async (arg, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI
  try {
    await packApi.deletePack(arg)
    dispatch(packsThunks.getPacks({}))
  } catch (e) {
    return rejectWithValue(e)
  }
})


export const packsReducer = slice.reducer
export const packAction = slice.actions
export const packsThunks = { getPacks, deletePack }



