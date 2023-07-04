import { SearchBar } from 'features/pack/components/searchBar/SearchBar'
import { PacksTable } from 'features/pack/components/packsList/packsTable/PacksTable'
import s from 'features/pack/components/packsList/style.module.scss'
import { PageTitleBlock } from 'common/components/pageTitleBlock/PageTitleBlock'
import { PaginatorPacks } from 'features/pack/components/packsList/paginatorPaks/paginatorPacks'
import { useGetPacksQuery } from 'features/pack/service/pack.slice'
import { useAppSelector } from 'common/hooks'

export const PacksList = () => {

  const sortPackParams = useAppSelector(state => state.sortPackSlice.packParams)
  const { isLoading } = useGetPacksQuery(sortPackParams)

  if (isLoading) return <></>

  return (
    <div className={s.packsList}>
      <PageTitleBlock />
      <SearchBar />
      <PacksTable />
      <PaginatorPacks />
    </div>
  )
}
