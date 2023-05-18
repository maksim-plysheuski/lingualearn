import { createSlice } from '@reduxjs/toolkit'
import { packApi, TGetPacksArg, TPacksResponse } from 'features/pack/packApi'
import { createAppAsyncThunk } from 'common/utils/createAppAsyncThunk'


const slice = createSlice({
  name: 'packs',
  initialState: {
    packs: {} as TPacksResponse
  },
  reducers: {},
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
export const packsThunks = { getPacks }



