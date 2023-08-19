import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseURL } from 'common/api/common.api'
import { TCreatePackArg, TGetPacksArg, TPacksResponse } from 'features/pack/service/packApi'


export const packsApi = createApi({
  reducerPath: 'packsApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL, credentials: "include" }),

  endpoints: (build) => {
    return {
      getPacks: build.query<TPacksResponse, TGetPacksArg>({
        query: (args) => {
          return {
            method: 'GET',
            url: 'cards/pack',
            params: args
          }
        }
      }),
      createPack: build.mutation<any, TCreatePackArg>({
        query: (cardsPack) => {
          return {
            method: 'POST',
            url: 'cards/pack',
            body: {
              cardsPack,
            },
          }
        }
      }),

    }
  }
})

export const { useGetPacksQuery, useCreatePackMutation  } = packsApi
