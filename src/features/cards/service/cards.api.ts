import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseURL } from 'common/api/common.api'
import {
  CardType, TChangeGradeArg,
  TCreateCardArg,
  TGetCardsArgs,
  TGetCardsResponse,
  TUpdateCardArg
} from 'features/cards/service/cards.types'


const baseEndpoint = '/cards/card'

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
            url: baseEndpoint,
            params: args
          }
        },
        providesTags: ['Cards']
      }),
      createCard: build.mutation<{ newCard: CardType }, TCreateCardArg>({
        query: (card) => {
          return {
            method: 'POST',
            url: baseEndpoint,
            body: {
              card
            }
          }
        },
        invalidatesTags: ['Cards']
      }),
      updateCard: build.mutation<{ updatedCard: CardType }, TUpdateCardArg>({
        query: (card) => {
          return {
            method: 'PUT',
            url: baseEndpoint,
            body: {
              card
            }
          }
        },
        invalidatesTags: ['Cards']
      }),
      deleteCard: build.mutation<{ deletedCard: CardType }, string>({
        query: (id) => {
          return {
            method: 'DELETE',
            url: baseEndpoint,
            params: {
              id
            }
          }
        },
        invalidatesTags: ['Cards']
      }),
      changeGradeCard: build.mutation<{ updatedGrade: CardType }, TChangeGradeArg>({
        query: (arg) => ({ method: 'PUT', url: '/cards/grade', body: arg }),
      })
    }
  }
})

export const {
  useGetCardsQuery,
  useCreateCardMutation,
  useUpdateCardMutation,
  useDeleteCardMutation,
  useChangeGradeCardMutation
} = cardsApi
