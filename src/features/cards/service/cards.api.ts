import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseURL } from 'common/api/common.api'


export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL
  }),

  endpoints: (build) => {
    return {
      getCards: build.query<any, string>({
        query: (packId) => {
          return {
            method: 'GET',
            url: 'cards/card',
            params: {
              cardsPack_id: packId
            }
          }
        }
      })
    }
  }
})

export const { useGetCardsQuery } = cardsApi
