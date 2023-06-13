import React from 'react'
import { Paginator } from 'common/components/paginator/Paginator'
import { useSearchCards } from 'features/pack/hook/useSearchCards'

export const PaginatorPacks = () => {
  const {pageSize, page, countPage, getNewPage } = useSearchCards()

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

