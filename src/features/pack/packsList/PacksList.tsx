import { SearchBar } from '../searchBar/SearchBar'
import { Paginator } from 'common/components/paginator/Paginator'
import { PacksTable } from 'features/pack/packsList/packsTable/PacksTable'
import s from './style.module.scss'
import { PageTitleBlock } from 'common/components/pageTitleBlock/PageTitleBlock'
import { useAppSelector } from 'common/hooks'


export const PacksList = () => {
  const currentPage = useAppSelector(state => state.packs.packs.page)
  const packsTotalCount = useAppSelector(state => state.packs.packs.cardPacksTotalCount)
  const packsPerPage = useAppSelector(state => state.packs.packs.pageCount)


  return (
    <div className={s.packsList}>
      <PageTitleBlock pageTitle={'Packs List'}
                      showButton={true}
                      buttonTitle={'Add New Pack'}
      />
      <SearchBar />
      <PacksTable />
      <Paginator currentPage={currentPage}
                 itemsTotalCount={packsTotalCount}
                 itemsPerPage={packsPerPage}
                 itemsTitle={'packs'} />
    </div>
  )
}
