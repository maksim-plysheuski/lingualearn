import { SearchBar } from 'features/pack/components/searchBar/SearchBar'
import { PacksTable } from 'features/pack/components/packsList/packsTable/PacksTable'
import s from 'features/pack/components/packsList/style.module.scss'
import { PageTitleBlock } from 'common/components/pageTitleBlock/PageTitleBlock'
import { PaginatorPacks } from 'features/pack/components/paginatorPaks/paginatorPacks'
import { useGetPacksQuery } from 'features/pack/service/pack.slice'


export const PacksList = () => {


  const { data, isLoading } = useGetPacksQuery({})
  return (
    <div className={s.packsList}>
      <PageTitleBlock />
      <SearchBar />
      <PacksTable />
      <PaginatorPacks />
    </div>
  )
}
