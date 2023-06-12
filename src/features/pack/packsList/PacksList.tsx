import { SearchBar } from '../searchBar/SearchBar'
import { Paginator } from 'common/components/paginator/Paginator'
import { PacksTable } from 'features/pack/packsList/packsTable/PacksTable'
import s from './style.module.scss'
import { PageTitleBlock } from 'common/components/pageTitleBlock/PageTitleBlock'
import { useEffect, useState } from 'react'
import { packsThunks } from 'features/pack/packs.slice'
import { useSearchCards } from 'features/pack/hook/useSearchCards'


export const PacksList = () => {
  const { params, dispatch, packs, pageSize, page, countPage, getNewPage } = useSearchCards()

  useEffect(() => {
    // dispatch(packAction.setPackParams(params))
    dispatch(packsThunks.getPacks(params))
  }, [])

  const [open, setOpen] = useState(false)

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
      <Paginator pageSize={pageSize}
                 currentPage={page}
                 countPage={countPage}
                 getNewPage={getNewPage}
      />
    </div>
  )
}
