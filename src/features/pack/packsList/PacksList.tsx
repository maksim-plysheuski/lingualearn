import { SearchBar } from '../searchBar/SearchBar'
import { Paginator } from 'common/components/paginator/Paginator'
import { PacksTable } from 'features/pack/packsList/packsTable/PacksTable'
import s from './style.module.scss'
import { PageTitleBlock } from 'common/components/pageTitleBlock/PageTitleBlock'
import { useAppSelector } from 'common/hooks'
import { useSearchCards } from 'features/pack/hook/useSearchCards'
import { useEffect } from 'react'
import { packAction, packsThunks } from 'features/pack/packs.slice'


export const PacksList = () => {
  const { params, dispatch } = useSearchCards()
  const packs = useAppSelector(state => state.packs.packs.cardPacks)
  const currentPage = useAppSelector(state => state.packs.packs.page)
  const packsTotalCount = useAppSelector(state => state.packs.packs.cardPacksTotalCount)
  const packsPerPage = useAppSelector(state => state.packs.packs.pageCount)

  useEffect(() => {
    dispatch(packAction.setPackParams(params))
    dispatch(packsThunks.getPacks({}))
  }, [])

  const addPack = () => {
    //need to fix
  }

  if (!packs) return <h1>louding</h1>
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
