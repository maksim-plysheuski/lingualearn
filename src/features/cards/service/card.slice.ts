import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { FetchCardType } from 'features/cards/service/type'

const baseEndpoint = '/cards/card'
const baseUrl = 'https://neko-back.herokuapp.com/2.0/'

const cardApi = createApi({
  reducerPath: 'cardApi',
  tagTypes: ['cards'],
  baseQuery: fetchBaseQuery({ baseUrl, credentials: 'include' }),
  endpoints: (build) => {
    return {
      fetchCards: build.query<any, FetchCardType>({
        query: (params) => ({ url: baseEndpoint, params }),
        providesTags: ['cards']
      })
    }
  }
})

export const { useFetchCardsQuery } = cardApi

