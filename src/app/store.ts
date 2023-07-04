import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { appReducer } from 'app/app.slice'
import { authReducer } from 'features/auth/auth.slice'
import { profileReducer } from 'features/profile/profile.slice'
import { packsReducer } from 'features/pack/packs.slice'
import { cardsReducer } from 'features/cards/cards.slice'
import { packApi } from 'features/pack/service/pack.slice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { sortPackSlice } from 'features/pack/service/sortPackSlice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    profile: profileReducer,
    packs: packsReducer,
    cards: cardsReducer,
    [packApi.reducerPath]: packApi.reducer,
    sortPackSlice:sortPackSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(packApi.middleware)
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
