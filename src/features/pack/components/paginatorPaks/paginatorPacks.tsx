import React from 'react'
import { Paginator } from 'common/components/paginator/Paginator'
import { useSearchPaks } from 'features/pack/hook/useSearchPaks'

export const PaginatorPacks = () => {
  const {pageSize, page, countPage, getNewPage } = useSearchPaks()

  return (
    <>
      <Paginator pageSize={pageSize}
                 currentPage={page}
                 countPage={countPage}
                 getNewPage={getNewPage}
      />
    </>
  )
}

