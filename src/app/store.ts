import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { cardsParamsReducer } from 'features/cards/service/cards.params.slice'
import { packsParamsReducer } from 'features/pack/service/packs.params.slice'
import { authReducer } from 'features/auth'
import { appReducer } from 'app/components/app.slice'
import { packsApi } from 'features/pack/service'
import { cardsApi } from 'features/cards/service/cards.api'


export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    packsParams: packsParamsReducer,
    cardsParams: cardsParamsReducer,
    [cardsApi.reducerPath]: cardsApi.reducer,
    [packsApi.reducerPath]: packsApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware()
    .concat(cardsApi.middleware)
    .concat(packsApi.middleware)
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
