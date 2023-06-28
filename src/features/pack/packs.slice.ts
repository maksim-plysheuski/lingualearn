import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  packApi,
  TCreatePackArg,
  TDeletePackArg, TDeletePackResponse,
  TGetPacksArg,
  TPacksResponse,
  TUpdatePackArg, TUpdatePackResponse
} from 'features/pack/packApi'
import { createAppAsyncThunk } from 'common/utils/createAppAsyncThunk'
import { thunkTryCatch } from 'common/utils/thunk-try-catch'


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
        state.packParams = { ...state.packParams, ...action.payload.arg }
        if (action.payload.arg.user_id || action.payload.arg.user_id === '') {
          state.packParams = {
            ...state.packParams,
            user_id: action.payload.arg.user_id,
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
      .addCase(deletePack.fulfilled, (state, action) => {
        state.packs = {
          ...state.packs,
          cardPacks: state.packs.cardPacks.filter(pack =>
            pack._id !== action.payload.pack.deletedCardsPack._id
              ? { ...pack } : false)
        }
      })
  }
})


const getPacks = createAppAsyncThunk<{ packs: TPacksResponse, arg: TGetPacksArg }, TGetPacksArg>
('packs/getPacks', async (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    const params = thunkAPI.getState().packs.packParams
    const res = await packApi.getPacks({ ...params, ...arg })
    return { packs: res.data, arg }
  })
})

const deletePack = createAppAsyncThunk<{ pack: TDeletePackResponse }, TDeletePackArg>
('packs/deletePack', async (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    const res = await packApi.deletePack(arg)
    return { pack: res.data }
  }, false)
})

const createPack = createAppAsyncThunk<unknown, TCreatePackArg>
('packs/createPack', (arg, thunkAPI) => {
  const { dispatch } = thunkAPI
  return thunkTryCatch(thunkAPI, async () => {
    await packApi.createPack(arg)
    await dispatch(getPacks({}))
  }, false)
})


const updatePack = createAppAsyncThunk<TUpdatePackResponse, { newPack: TUpdatePackArg, needGetPacks: boolean }>
('packs/updatePack', (arg, thunkAPI) => {
  const { dispatch } = thunkAPI
  return thunkTryCatch(thunkAPI, async () => {
    const res = await packApi.updatePack(arg.newPack)
    if (arg.needGetPacks) {
      await dispatch(getPacks({}))
    }
    return res
  }, false)
})


export const packsReducer = slice.reducer
export const packAction = slice.actions
export const packsThunks = { getPacks, deletePack, createPack, updatePack }



