import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import { base_URL } from 'common/api/common.api'
import {
  ArgCreatePackType,
  ArgFetchPacksType,
  FetchPacksResponseType,
  ArgUpdatePackType,
  DeletePackResponseType, CreateUpdatePackResponseType
} from 'features/pack/service/packs.api.types'


export const packsApi = createApi({
  reducerPath: 'packsApi',
  baseQuery: retry(fetchBaseQuery({ baseUrl: base_URL, credentials: 'include' }), { maxRetries: 1 }),
  tagTypes: ['Packs'],
  refetchOnReconnect: true,
  keepUnusedDataFor: 180,
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
        providesTags: ['Packs']

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

export const {
  useGetPacksQuery,
  useCreatePackMutation,
  useUpdatePackMutation,
  useDeletePackMutation,
} = packsApi
