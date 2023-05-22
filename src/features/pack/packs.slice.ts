import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { packApi, TGetPacksArg, TPacksResponse } from 'features/pack/packApi'
import { createAppAsyncThunk } from 'common/utils/createAppAsyncThunk'


const slice = createSlice({
  name: 'packs',
  initialState: {
    packs: {} as TPacksResponse,
    packParams: {
      pageCount: 8
    } as TGetPacksArg
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
      })
  }
})

const getPacks = createAppAsyncThunk<{ packs: TPacksResponse }, TGetPacksArg>('packs/getPacks', async (arg) => {
  const res = await packApi.getPacks(arg)
  return { packs: res.data }
})


export const packsReducer = slice.reducer
export const packAction = slice.actions
export const packsThunks = { getPacks }



