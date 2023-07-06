import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { appReducer } from 'app/app.slice'
import { authReducer } from 'features/auth/auth.slice'
import { profileReducer } from 'features/profile/profile.slice'
import { packsReducer } from 'features/pack/packs.slice'
import { packApi } from 'features/pack/service/pack.slice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { sortPackSlice } from 'features/pack/service/sortPackSlice'
import { cardApi } from 'features/cards/service'
import { paramsCardReducer } from 'features/cards/service/paramsCard.Slice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    profile: profileReducer,
    packs: packsReducer,
    [packApi.reducerPath]: packApi.reducer,
    [cardApi.reducerPath]: cardApi.reducer,
    sortPackSlice: sortPackSlice,
    paramsCard:paramsCardReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(packApi.middleware)
    .concat(cardApi.middleware)
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
