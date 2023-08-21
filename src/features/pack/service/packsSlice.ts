import { createSlice } from '@reduxjs/toolkit'
import { packApi } from 'features/pack/service/packApi'
import { createAppAsyncThunk } from 'common/utils/createAppAsyncThunk'
import { thunkTryCatch } from 'common/utils/thunk-try-catch'
import { FetchPacksArgType, TPacksResponse } from 'features/pack/service/packsTypes'


const slice = createSlice({
  name: 'packs',
  initialState: {
    packs: {} as TPacksResponse,
  },
  reducers: {},
  extraReducers: builder => {

  }
})

const getPacks = createAppAsyncThunk<{ packs: TPacksResponse, arg: FetchPacksArgType }, FetchPacksArgType>
('packs/getPacks', async (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    /*const params = thunkAPI.getState().packs.packParams*/
    const res = await packApi.getPacks({ ...arg })
    return { packs: res.data, arg }
  })
})

/*const deletePack = createAppAsyncThunk<{ deletedCardsPack: TPack }, TDeletePackArg>
('packs/deletePack', async (arg, thunkAPI) => {
  return thunkTryCatch(thunkAPI, async () => {
    return await packApi.deletePack(arg)
  }, false)
})*/

/*const createPack = createAppAsyncThunk<{ newCardsPack: TPack }, TCreatePackArg>
('packs/createPack', (arg, thunkAPI) => {
  const { dispatch } = thunkAPI
  return thunkTryCatch(thunkAPI, async () => {
    const res = await packApi.createPack(arg)
    await dispatch(getPacks({}))
    return res
  }, false)
})*/

/*const updatePack = createAppAsyncThunk<{ updatedCardsPack: TPack }, { newPack: TUpdatePackArg, needGetPacks: boolean }>
('packs/updatePack', (arg, thunkAPI) => {
  const { dispatch } = thunkAPI
  return thunkTryCatch(thunkAPI, async () => {
    const res = await packApi.updatePack(arg.newPack)
    if (arg.needGetPacks) {
      await dispatch(getPacks({}))
    }
    return res
  }, false)
})*/


export const packsReducer = slice.reducer
export const packAction = slice.actions
export const packsThunks = { getPacks }



