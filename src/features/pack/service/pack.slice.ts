import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FetchPackT } from 'features/pack/service/type'


export const packApi = createApi({
  reducerPath: 'packApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://neko-back.herokuapp.com/2.0/',
    credentials: 'include'
  }),

  endpoints: (build) => {
    return {
      getPacks: build.query<any, FetchPackT>({
        query: (params) => {
          return {
            method: 'GET',
            url: 'cards/pack',
            params: params
          }
        }
      }),

    }
  }
})


export const { useGetPacksQuery } = packApi