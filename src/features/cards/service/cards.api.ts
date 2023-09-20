import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import { base_URL } from 'common/api/common.api'
import {
  CreateCardResponseType, ArgCreateCardType, ArgUpdateCardType,
  DeleteCardResponseType, ArgChangeGradeType,
  ArgFetchCardsType,
  FetchCardsResponseType,
  UpdateCardResponseType, ChangeGradeResponseType
} from 'features/cards/service/cards.api.types'


const cardsEndpoint = '/cards/card'

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: retry(fetchBaseQuery({ baseUrl: base_URL, credentials: 'include' }), { maxRetries: 1 }),
  tagTypes: ['Cards'],
  refetchOnReconnect: true,
  keepUnusedDataFor: 180,
  endpoints: (build) => {
    return {
      getCards: build.query<FetchCardsResponseType, ArgFetchCardsType>({
        query: (args) => ({ method: 'GET', url: cardsEndpoint, params: args }),
        providesTags: (result) => result ? [...result.cards.map(card => ({
          type: 'Cards' as const,
          id: card._id
        })), 'Cards'] : ['Cards']
      }),
      createCard: build.mutation<CreateCardResponseType, ArgCreateCardType>({
        query: (card) => ({ method: 'POST', url: cardsEndpoint, body: { card } }),
        invalidatesTags: ['Cards']
      }),
      updateCard: build.mutation<UpdateCardResponseType, ArgUpdateCardType>({
        query: (card) => ({ method: 'PUT', url: cardsEndpoint, body: { card } }),
        invalidatesTags: (result, error, arg) => [{ type: 'Cards', id: arg._id }]
      }),
      deleteCard: build.mutation<DeleteCardResponseType, string>({
        query: (cardId) => ({ method: 'DELETE', url: cardsEndpoint, params: { id: cardId } }),
        invalidatesTags: ['Cards']
      }),
      changeGradeCard: build.mutation<ChangeGradeResponseType, ArgChangeGradeType>({
        query: (arg) => ({ method: 'PUT', url: '/cards/grade', body: arg })
      })
    }
  }
})

export const { useGetCardsQuery, useCreateCardMutation, useUpdateCardMutation, useDeleteCardMutation, useChangeGradeCardMutation } = cardsApi
