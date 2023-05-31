import { SearchBar } from '../searchBar/SearchBar'
import { Paginator } from 'common/components/paginator/Paginator'
import { PacksTable } from 'features/pack/packsList/packsTable/PacksTable'
import s from './style.module.scss'
import { PageTitleBlock } from 'common/components/pageTitleBlock/PageTitleBlock'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { useSearchParams } from 'react-router-dom'


export const PacksList = () => {
  const dispatch = useAppDispatch()
  const packParams = useAppSelector(state => state.packs.packParams)
  const currentPage = useAppSelector(state => state.packs.packs.page)
  const packsTotalCount = useAppSelector(state => state.packs.packs.cardPacksTotalCount)
  const packsPerPage = useAppSelector(state => state.packs.packs.pageCount)
  const [searchParams, setSearchParams] = useSearchParams()

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
                 itemsPerPage={packsPerPage}
                 itemsTitle={'packs'} />
    </div>
  )
}
