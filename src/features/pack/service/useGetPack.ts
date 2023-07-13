import { useAppSelector } from 'common/hooks'
import { useGetPacksQuery } from 'features/pack/service/pack.slice'

export const useGetPack = () => {
  const sortPackParams = useAppSelector(state => state.sortPackSlice.packParams)

  return useGetPacksQuery(sortPackParams)
}