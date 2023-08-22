import { SearchBar } from './searchBar/SearchBar'
import s from './style.module.scss'
import { PaginatorPacks } from './paginatorPacks/paginatorPacks'
import { TitleBlockPacks } from 'common/components'
import { PacksTable } from './packsTable/PacksTable'
import { useGetPacks } from 'features/pack/hook/useGetPacks'
import { SkeletonPacksList } from 'features/pack/components/packsList/skeletonPacksList/SkeletonPacksList'


export const PacksList = () => {
  const { isLoading } = useGetPacks()

  if (isLoading) {
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
