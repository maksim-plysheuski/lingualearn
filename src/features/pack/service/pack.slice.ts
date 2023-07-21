import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CardPacksT, FetchPackT, ResponsePack } from 'features/pack/service/packSlice.type'

const baseEndpoint = 'cards/pack'
export const packApi = createApi({
  reducerPath: 'packApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://neko-back.herokuapp.com/2.0/', credentials: 'include' }),
  tagTypes: ['Packs'],
  endpoints: (build) => {
    return {
      getPacks: build.query<ResponsePack, FetchPackT>({
        query: (params) => ({ url: baseEndpoint, params }),
        providesTags: ['Packs']
      }),
      addPack: build.mutation<{ newCardsPack: CardPacksT }, { name: string, deckCover?: string, private?: boolean }>({
        query: (arg) => ({ method: 'POST', url: baseEndpoint, body: { cardsPack: arg } }),
        invalidatesTags: ['Packs']
      }),
      removePack: build.mutation<{ deletedCardsPack: CardPacksT }, { id: string }>({
        query: (params) => ({ method: 'DELETE', url: baseEndpoint, params: { id: params.id } }),
        invalidatesTags: ['Packs']
      }),
      updatePack: build.mutation<{ updatedCardsPack: CardPacksT }, {
        _id: string,
        name?: string,
        private?: boolean,
        deckCover?: string
      }>({
        query: (arg) => ({ method: 'PUT', url: baseEndpoint, body: { cardsPack: arg } }),
        invalidatesTags: ['Packs']
      })
    }
  }
})


export const { useGetPacksQuery, useAddPackMutation, useRemovePackMutation, useUpdatePackMutation } = packApi