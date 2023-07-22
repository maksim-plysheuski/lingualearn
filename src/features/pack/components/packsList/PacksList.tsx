import { SearchBar } from './searchBar/SearchBar'
import s from './style.module.scss'
import { useEffect } from 'react'
import { packAction, packsThunks } from 'features/pack/packs.slice'
import { useSearchPacks } from 'features/pack/hook/useSearchPacks'
import { PaginatorPacks } from './paginatorPacks/paginatorPacks'
import { TitleBlockPacks } from 'common/components'
import { PacksTable } from './packsTable/PacksTable'
import { SkeletonPacksList } from './skeletonPacksList/SkeletonPacksList'


export const PacksList = () => {
  const { params, dispatch, packs } = useSearchPacks()

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
