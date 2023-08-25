import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseURL } from 'common/api/common.api'
import { TGetCardsArgs, TGetCardsResponse } from 'features/cards/cardsApi'


export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL, credentials: 'include' }),
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
      }),
    }
  }
})

export const { useGetCardsQuery } = cardsApi
