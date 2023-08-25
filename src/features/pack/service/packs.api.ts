import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseURL } from 'common/api/common.api'
import { TCreatePackArg, FetchPacksArgType, TPack, TPacksResponse, TUpdatePackArg } from 'features/pack/service/packs.types'


export const packsApi = createApi({
  reducerPath: 'packsApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL, credentials: 'include' }),
  tagTypes: ['Packs'],
  endpoints: (build) => {
    return {
      getPacks: build.query<TPacksResponse, FetchPacksArgType>({
        query: (args) => {
          return {
            method: 'GET',
            url: 'cards/pack',
            params: args
          }
        },
        providesTags: ['Packs'],
        
      }),
      createPack: build.mutation<{ newCardsPack: TPack }, TCreatePackArg>({
        query: (cardsPack) => {
          return {
            method: 'POST',
            url: 'cards/pack',
            body: {
              cardsPack
            }
          }
        },
        invalidatesTags: ['Packs']
      }),
      updatePack: build.mutation<{ newCardsPack: TPack }, TUpdatePackArg>({
        query: (cardsPack) => {
          return {
            method: 'PUT',
            url: 'cards/pack',
            body: {
              cardsPack
            }
          }
        },
        invalidatesTags: ['Packs']
      }),
      deletePack: build.mutation<{ deletedCardsPack: TPack }, string>({
        query: (packId) => {
          return {
            method: 'DELETE',
            url: `cards/pack`,
            params: {
              id: packId
            }
          }
        },
        invalidatesTags: ['Packs']
      })
    }
  }
})

export const { useGetPacksQuery, useCreatePackMutation, useUpdatePackMutation, useDeletePackMutation } = packsApi
