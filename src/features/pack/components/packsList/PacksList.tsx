import { SearchBar } from './searchBar/SearchBar'
import s from './style.module.scss'
import { useEffect } from 'react'
import { packAction, packsThunks } from 'features/pack/service/packs.slice'
import { useSearchPacks } from 'features/pack/hook/useSearchPacks'
import { PaginatorPacks } from './paginatorPacks/paginatorPacks'
import { TitleBlockPacks } from 'common/components'
import { PacksTable } from './packsTable/PacksTable'
import { SkeletonPacksList } from './skeletonPacksList/SkeletonPacksList'
import { useGetPacksQuery } from 'features/pack/service/packs.api'


export const PacksList = () => {
  const { params, dispatch, packs } = useSearchPacks()


  const { data, error, isLoading } = useGetPacksQuery({});

  useEffect(() => {
    dispatch(packAction.setPackParams(params))
    dispatch(packsThunks.getPacks({}))
  }, [])

  if (!packs) {
    return <SkeletonPacksList />
  }

  return (
    <div className={s.packsList}>
      <TitleBlockPacks />
      <SearchBar />
      <PacksTable />
      <PaginatorPacks />
    </div>
  )
}
