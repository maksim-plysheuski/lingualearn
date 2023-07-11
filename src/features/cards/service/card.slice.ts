import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { AddCardT, CardsT, ChangeCardT, FetchCardType, FetchResponseCardsT } from 'features/cards/service'

const baseEndpoint = '/cards/card'
const baseUrl = 'https://neko-back.herokuapp.com/2.0/'

export const cardApi = createApi({
  reducerPath: 'cardApi',
  tagTypes: ['cards', 'allCards'],
  baseQuery: fetchBaseQuery({ baseUrl, credentials: 'include' }),
  endpoints: (build) => {
    return {
      fetchCards: build.query<FetchResponseCardsT, FetchCardType>({
        query: (params) => ({ url: baseEndpoint, params }),
        providesTags: ['cards']
      }),
      fetchAllCards: build.query<FetchResponseCardsT, FetchCardType>({
        query: (params) => ({ url: baseEndpoint, params }),
        providesTags: ['allCards']
      }),
      addCard: build.mutation<{ newCard: CardsT }, AddCardT>({
        query: (arg) => ({ method: 'POST', url: baseEndpoint, body: { card: arg } }),
        invalidatesTags: ['cards']
      }),
      changeCard: build.mutation<{ updatedCard: CardsT }, ChangeCardT>({
        query: (arg) => ({ method: 'PUT', url: baseEndpoint, body: { card: arg } }),
        invalidatesTags: ['cards']
      }),
      changeGradeCard: build.mutation<{ updatedGrade: CardsT }, { grade: number, card_id: string, packId: string }>({
        query: (arg) => ({ method: 'PUT', url: '/cards/grade', body: arg }),
        invalidatesTags: ['allCards']
      }),
      removeCard: build.mutation<{ deletedCard: CardsT }, { id: string }>({
        query: (params) => ({ method: 'DELETE', url: baseEndpoint, params }),
        invalidatesTags: ['cards']
      })
    }
  }
})

export const {
  useFetchCardsQuery,
  useAddCardMutation,
  useChangeCardMutation,
  useRemoveCardMutation,
  useFetchAllCardsQuery,
  useChangeGradeCardMutation
} = cardApi

