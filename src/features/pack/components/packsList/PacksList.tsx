import { SearchBar } from 'features/pack/components/searchBar/SearchBar'
import { PacksTable } from 'features/pack/components/packsList/packsTable/PacksTable'
import s from 'features/pack/components/packsList/style.module.scss'
import { PageTitleBlock } from 'common/components/pageTitleBlock/PageTitleBlock'
import { PaginatorPacks } from 'features/pack/components/paginatorPaks/paginatorPacks'


export const PacksList = () => {
  // const { params, dispatch, packs } = useSearchPaks()
  //
  // useEffect(() => {
  //   dispatch(packAction.setPackParams(params))
  //   dispatch(packsThunks.getPacks({}))
  // }, [])
  //
  // if (!packs) return <h1>loading</h1>

  return (
    <div className={s.packsList}>
      <PageTitleBlock />
      <SearchBar />
      <PacksTable />
      <PaginatorPacks />
    </div>
  )
}
