import { SearchBar } from '../searchBar/SearchBar'
import { PacksTable } from 'features/pack/packsList/packsTable/PacksTable'
import s from './style.module.scss'
import { PageTitleBlock } from 'common/components/pageTitleBlock/PageTitleBlock'
import { useEffect } from 'react'
import { packAction, packsThunks } from 'features/pack/packs.slice'
import { useSearchCards } from 'features/pack/hook/useSearchCards'
import { PaginatorPacks } from 'features/pack/paginatorPaks/paginatorPacks'


export const PacksList = () => {
  const { params, dispatch, packs,} = useSearchCards()

  useEffect(() => {
    dispatch(packAction.setPackParams(params))
    dispatch(packsThunks.getPacks({}))
  }, [])

  if (!packs) return <h1>loading</h1>
  return (
    <div className={s.packsList}>
      <PageTitleBlock pageTitle={'Packs List'}
                      showButton={true}
                      buttonTitle={'Add New Pack'}
      />
      <SearchBar />
      <PacksTable />
      <PaginatorPacks />
    </div>
  )
}
