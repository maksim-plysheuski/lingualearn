import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseURL } from 'common/api/common.api'
import {
  ArgCreatePackType,
  ArgFetchPacksType,
  FetchPacksResponseType,
  ArgUpdatePackType,
  DeletePackResponseType, CreateUpdatePackResponseType
} from 'features/pack/service/packs.types'


export const packsApi = createApi({
  reducerPath: 'packsApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL, credentials: 'include' }),
  tagTypes: ['Packs'],
  endpoints: (build) => {
    return {
      getPacks: build.query<FetchPacksResponseType, ArgFetchPacksType>({
        query: (args) => {
          return {
            method: 'GET',
            url: 'cards/pack',
            params: args
          }
        },
        providesTags: ['Packs'],
        
      }),
      createPack: build.mutation<CreateUpdatePackResponseType, ArgCreatePackType>({
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
      updatePack: build.mutation<CreateUpdatePackResponseType, ArgUpdatePackType>({
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
      deletePack: build.mutation<DeletePackResponseType, string>({
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
