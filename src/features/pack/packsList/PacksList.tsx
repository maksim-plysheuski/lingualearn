import { SearchBar } from '../searchBar/SearchBar'
import { Paginator } from 'common/components/paginator/Paginator'
import { PacksTable } from 'features/pack/packsList/packsTable/PacksTable'
import s from './style.module.scss'
import { PageTitleBlock } from 'common/components/PageTitleBlock/PageTitleBlock'
import { useAppSelector } from 'common/hooks'


export const PacksList = () => {
  const currentPage = useAppSelector(state => state.packs.packs.page)
  const packsTotalCount = useAppSelector(state => state.packs.packs.cardPacksTotalCount)
  const itemsPerPage = useAppSelector(state => state.packs.packs.pageCount)

  const addPack = () => {
    //need to fix
  }

  return (
    <div className={s.packsList}>
      <PageTitleBlock pageTitle={'Packs List'}
                      showButton={true}
                      buttonTitle={'Add New Pack'}
                      buttonCallback={addPack} />
      <SearchBar />
      <PacksTable />
      <Paginator currentPage={currentPage}
                 itemsTotalCount={packsTotalCount}
                 itemsPerPage={itemsPerPage}
                 itemsTitle={'packs'} />
    </div>
  )
}
