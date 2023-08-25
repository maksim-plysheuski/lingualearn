import { useGetPacksQuery } from 'features/pack/service/packs.api'
import { useAppSelector } from 'common/hooks'
import { useSearchParamsPacks } from 'features/pack/hook/useSearchParamsPacks'


export const useGetPacks = () => {
  const packsParams = useAppSelector(state => state.packsParams.packParams)
  useSearchParamsPacks()

  return useGetPacksQuery(packsParams)
}