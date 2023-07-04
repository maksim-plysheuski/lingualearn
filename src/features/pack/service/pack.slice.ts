import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AddPackT, FetchPackT, ResponseAddPack, ResponsePack } from 'features/pack/service/type'


export const packApi = createApi({
  reducerPath: 'packApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://neko-back.herokuapp.com/2.0/',
    credentials: 'include'
  }),
  tagTypes: ['Packs'],

  endpoints: (build) => {
    return {
      getPacks: build.query<ResponsePack, FetchPackT>({
        query: (params) => {
          return {
            method: 'GET',
            url: 'cards/pack',
            params: params
          }
        },
        providesTags: ['Packs']
      }),
      addPack: build.mutation<ResponseAddPack, AddPackT>({
          query: (arg) => {
            return {
              method: 'POST',
              url: 'cards/pack',
              body: { cardsPack: arg }
            }
          },
          invalidatesTags: ['Packs']
        }
      )

    }
  }
})


export const { useGetPacksQuery, useAddPackMutation } = packApi