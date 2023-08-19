import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseURL } from 'common/api/common.api'
import { TGetPacksArg } from 'features/pack/service/packApi'


export const packsApi = createApi({
  reducerPath: 'packsApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL, credentials: "include" }),

  endpoints: (build) => {
    return {
      getPacks: build.query<any, any>({
        query: (args: TGetPacksArg = {}) => {
          return {
            method: 'GET',
            url: 'cards/pack',
            params: {...args}
          }
        }
      })
    }
  }
})

export const { useGetPacksQuery  } = packsApi
