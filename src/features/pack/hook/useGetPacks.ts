import { useGetPacksQuery } from 'features/pack/service/packsApi'
import { useAppSelector } from 'common/hooks'


export const useGetPacks = () => {
  const packsParams = useAppSelector(state => state.packsParams.packParams)

  return useGetPacksQuery(packsParams)
}