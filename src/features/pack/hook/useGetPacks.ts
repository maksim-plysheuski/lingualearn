import { useGetPacksQuery } from 'features/pack/service/packsApi'
import { useAppSelector } from 'common/hooks'
import { useSearchParamsPacks } from 'features/pack/hook/useSearchParamsPacks'


export const useGetPacks = () => {
  const packsParams = useAppSelector(state => state.packsParams.packParams)
  useSearchParamsPacks()

  return useGetPacksQuery(packsParams)
}