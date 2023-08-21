import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { appReducer } from 'app/components/app.slice'
import { profileReducer } from 'features/profile/profile.slice'
import { packsReducer } from 'features/pack/service/packsSlice'
import { cardsReducer } from 'features/cards/cards.slice'
import {authReducer} from "features/auth";
import { cardsApi } from 'features/cards/service/cards.api'
import { setupListeners } from '@reduxjs/toolkit/query'
import { packsApi } from 'features/pack/service/packsApi'
import { packsParamsReducer } from 'features/pack/service/packsParams.slice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    profile: profileReducer,
    packs: packsReducer,
    cards: cardsReducer,
    packsParams: packsParamsReducer,
    [cardsApi.reducerPath]: cardsApi.reducer,
    [packsApi.reducerPath]: packsApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware()
    .concat(cardsApi.middleware)
    .concat(packsApi.middleware)
  ,
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
