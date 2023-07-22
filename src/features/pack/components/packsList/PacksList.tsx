import { SearchBar } from 'features/pack/components/searchBar/SearchBar'
import s from 'features/pack/components/packsList/style.module.scss'
import { useEffect } from 'react'
import { packAction, packsThunks } from 'features/pack/packs.slice'
import { useSearchPacks } from 'features/pack/hook/useSearchPacks'
import { PaginatorPacks } from 'features/pack/components/paginatorPaks/paginatorPacks'
import { TitleBlockPacks } from 'common/components'
import { PacksTable } from 'features/pack/components/packsList/packsTable/PacksTable'
import { SkeletonPacksList } from 'common/components/skeletonPacksList/SkeletonPacksList'


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
