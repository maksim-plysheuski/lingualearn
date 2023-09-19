import { useGetPacksQuery } from 'features/pack/service/packs.api'
import { useAppSelector } from 'common/hooks'


export const useFetchPacks = () => {
  const packsParams = useAppSelector(state => state.packsParams.packParams)

  return useGetPacksQuery(packsParams)
}