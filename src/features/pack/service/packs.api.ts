import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import { base_URL } from 'common/api/common.api'
import {
  ArgCreatePackType,
  ArgFetchPacksType,
  FetchPacksResponseType,
  ArgUpdatePackType,
  DeletePackResponseType, CreateUpdatePackResponseType
} from 'features/pack/service/packs.api.types'


const packsEndpoint = 'cards/pack'

export const packsApi = createApi({
  reducerPath: 'packsApi',
  baseQuery: retry(fetchBaseQuery({ baseUrl: base_URL, credentials: 'include' }), { maxRetries: 1 }),
  tagTypes: ['Packs'],
  refetchOnReconnect: true,
  keepUnusedDataFor: 180,
  endpoints: (build) => {
    return {
      getPacks: build.query<FetchPacksResponseType, ArgFetchPacksType>({
        query: (args) => ({ method: 'GET', url: packsEndpoint, params: args }),
        providesTags: ['Packs']
      }),
      createPack: build.mutation<CreateUpdatePackResponseType, ArgCreatePackType>({
        query: (cardsPack) => ({ method: 'POST', url: packsEndpoint, body: { cardsPack } }),
        invalidatesTags: ['Packs']
      }),
      updatePack: build.mutation<CreateUpdatePackResponseType, ArgUpdatePackType>({
        query: (cardsPack) => ({ method: 'PUT', url: packsEndpoint, body: { cardsPack } }),
        invalidatesTags: (result, error, arg) => [{ type: 'Packs', id: arg._id }]
      }),
      deletePack: build.mutation<DeletePackResponseType, string>({
        query: (packId) => ({ method: 'DELETE', url: packsEndpoint, params: { id: packId } }),
        invalidatesTags: ['Packs']
      })
    }
  }
})

export const { useGetPacksQuery, useCreatePackMutation, useUpdatePackMutation, useDeletePackMutation } = packsApi
