import { SearchBar } from 'features/pack/components/searchBar/SearchBar'
import { PacksTable } from 'features/pack/components/packsList/packsTable/PacksTable'
import s from 'features/pack/components/packsList/style.module.scss'
import { TitleBlockPacks } from 'common/components/pageTitleBlock/TitleBlockPacks'
import { useEffect } from 'react'
import { packAction, packsThunks } from 'features/pack/packs.slice'
import { useSearchPacks } from 'features/pack/hook/useSearchPacks'
import { PaginatorPacks } from 'features/pack/components/paginatorPaks/paginatorPacks'


export const PacksList = () => {
  const { params, dispatch, packs } = useSearchPacks()

  useEffect(() => {
    dispatch(packAction.setPackParams(params))
    dispatch(packsThunks.getPacks({}))
  }, [])

  if (!packs) return <h1>loading</h1>

  return (
    <div className={s.packsList}>
      <TitleBlockPacks />
      <SearchBar />
      <PacksTable />
      <PaginatorPacks />
    </div>
  )
}
