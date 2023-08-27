import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseURL } from 'common/api/common.api'
import { TCard, TCreateCardArg, TGetCardsArgs, TGetCardsResponse, TUpdateCardArg } from 'features/cards/cardsApi'


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
      updateCard: build.mutation<{ updatedCard: TCard }, TUpdateCardArg>({
        query: (card) => {
          return {
            method: 'PUT',
            url: 'cards/card',
            body: {
              card
            }
          }
        },
        invalidatesTags: ['Cards']
      }),
      deleteCard: build.mutation<{ deletedCard: TCard }, string>({
        query: (id) => {
          return {
            method: 'DELETE',
            url: 'cards/card',
            params: {
              id
            }
          }
        },
        invalidatesTags: ['Cards']
      })
    }
  }
})

export const { useGetCardsQuery, useCreateCardMutation, useUpdateCardMutation, useDeleteCardMutation } = cardsApi
