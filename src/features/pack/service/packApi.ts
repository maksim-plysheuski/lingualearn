import { instance } from 'common'
import { FetchPacksArgType, TPacksResponse } from 'features/pack/service/packsTypes'

export const packApi = {
  getPacks: (args: FetchPacksArgType = {}) => {
    return instance.get<TPacksResponse>('cards/pack', { params: { ...args }})
  },
}