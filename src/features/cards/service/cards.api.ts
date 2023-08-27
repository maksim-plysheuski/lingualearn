import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseURL } from 'common/api/common.api'
import { TCard, TCreateCardArg, TGetCardsArgs, TGetCardsResponse } from 'features/cards/cardsApi'


export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL, credentials: 'include' }),
    tagTypes: ['Cards'],
  endpoints: (build) => {
    return {
      getCards: build.query<TGetCardsResponse, TGetCardsArgs>({
        query: (args) => {
          return {
            method: 'GET',
            url: 'cards/card',
            params: args
          }
        },
        providesTags: ['Cards']
      }),
      createCard: build.mutation<{ newCard: TCard }, TCreateCardArg>({
        query: (card) => {
          return {
            method: 'POST',
            url: 'cards/card',
            body: {
              card
            }
          }
        },
        invalidatesTags: ['Cards']
      }),
    }
  }
})

export const { useGetCardsQuery, useCreateCardMutation } = cardsApi
