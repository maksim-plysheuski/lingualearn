import { SearchBar } from './searchBar/SearchBar'
import s from './style.module.scss'
import { PaginatorPacks } from './paginatorPacks/paginatorPacks'
import { TitleBlock } from 'common/components'
import { PacksTable } from './packsTable/PacksTable'
import { useFetchPacks } from 'features/pack/hook/useFetchPacks'
import { SkeletonPacksList } from './skeletonPacksList/SkeletonPacksList'


export const PacksList = () => {
  const { isLoading } = useFetchPacks()

  if (isLoading) return <SkeletonPacksList />

  return (
    <div className={s.packsList}>
      <TitleBlock />
      <SearchBar />
      <PacksTable />
      <PaginatorPacks />
    </div>
  )
}
