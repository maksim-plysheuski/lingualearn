import { SearchBar } from './searchBar/SearchBar'
import s from './style.module.scss'
import { PaginatorPacks } from './paginatorPacks/paginatorPacks'
import { TitleBlockPacks } from 'common/components'
import { PacksTable } from './packsTable/PacksTable'



export const PacksList = () => {
  /*
  const { params, dispatch, packs } = useSearchPacks()

useEffect(() => {
   dispatch(packAction.setPackParams(params))
   dispatch(packsThunks.getPacks({}))
 }, [])*/

  /*if (!packs) {
    return <SkeletonPacksList />
  }*/

  return (
    <div className={s.packsList}>
      <TitleBlockPacks />
      <SearchBar />
      <PacksTable />
      <PaginatorPacks />
    </div>
  )
}
